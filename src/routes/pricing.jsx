import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/common/Loader.jsx";

const PricingPage = React.lazy(() => import("../views/pricing.jsx"));


const Pricing = () => {
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
          <PricingPage />
        </Suspense>
      )}
    </>
  );
};

export default Pricing;
