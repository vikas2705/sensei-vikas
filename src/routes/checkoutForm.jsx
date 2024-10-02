import React, { Suspense, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "../components/common/Loader.jsx";

const CheckoutModal = React.lazy(() => import("../views/Checkoutform.jsx"));

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Checkoutmodal = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <Elements stripe={stripePromise}>
            <CheckoutModal />
          </Elements>
        </Suspense>
      )}
    </>
  );
};

export default Checkoutmodal;
