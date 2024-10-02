import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/common/Loader.jsx";

const HomePage = React.lazy(() => import("../views/index.jsx"));


const Home = () => {
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
          <HomePage />
        </Suspense>
      )}
    </>
  );
};

export default Home;
