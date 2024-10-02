

const mongoose = require("mongoose");

//local mysql db connection
const connectDb = async (url) => {
  try {
    const mongo_url = `${url}`;
    await mongoose.connect(mongo_url);
    console.log("Database connected: ");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
