require("dotenv").config();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: "", // defaults to process.env["OPENAI_API_KEY"]
});

const Stripe = require("stripe"); // defaults to process.env["STRIPE_KEY"]
const stripe = new Stripe("");

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
//const connectDb = require("./config/db.config");

const userController = require("./src/controllers/user.controller");
// create express app
//const MONGO_URL = process.env.MONGO_URL;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

// Setup server port
const port = process.env.PORT || 5001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

let API_KEY = "";
let VOICE_ID = "";

const textToSpeech = async (inputText) => {
  const options = {
    method: "POST",
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      accept: "audio/mpeg",
      "content-type": "application/json",
      "xi-api-key": `${API_KEY}`,
    },
    data: {
      text: inputText,
    },
    responseType: "arraybuffer",
  };

  const speechDetails = await axios.request(options);
  return speechDetails.data;
};

const createSubscription = async (createSubscriptionRequest) => {
  const customer = await stripe.customers.create({
    name: createSubscriptionRequest.name,
    email: createSubscriptionRequest.email,
    payment_method: createSubscriptionRequest.paymentMethod,
    invoice_settings: {
      default_payment_method: createSubscriptionRequest.paymentMethod,
    },
  });

  // get the price id from the front-end
  const priceId = createSubscriptionRequest.priceId;
  // create a stripe subscription
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: priceId }],
    payment_settings: {
      payment_method_options: {
        card: {
          request_three_d_secure: "any",
        },
      },
      payment_method_types: ["card"],
      save_default_payment_method: "on_subscription",
    },
    expand: ["latest_invoice.payment_intent"],
  });

  // return the client secret and subscription id
  return {
    clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    subscriptionId: subscription.id,
    email: customer.email,
  };
};

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require user routes
const userRoutes = require("./src/routes/user.routes");
// const chatRoutes = require('./src/routes/chat.routes')
// using as middleware
app.use("/api/users", userRoutes);
app.use("/api/login", userRoutes);
// app.use('/api/chat',chatRoutes)

app.post("/api/chat", async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: req.body.message }],
    model: "gpt-3.5-turbo",
    max_tokens: 2048,
  });

  // if(completion.choices[0]) {
  //   const text = completion.choices[0].message.content
  //   const audioBuffer = await textToSpeech(text)
  //   console.log(`Success, Audio saved as: chatbot.mp3`)
  // }

  res.send(completion.choices[0].message.content);
});

app.post("/api/subscription", async (req, res) => {
  const result = await createSubscription(req.body);
  userController.updateSubScription(result);
  res.send(result);
});

// listen for requests
//connectDb(MONGO_URL).then(() => {
  app.listen(port, () => {
    userController.checkIP();
    console.log(`Server is listening on port ${port}`);
  });
//});
