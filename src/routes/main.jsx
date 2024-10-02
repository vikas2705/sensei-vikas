import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/common/Loader.jsx";

const MainPage = React.lazy(() => import("../views/Main.jsx"));


const Main = () => {
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
    <Suspense fallback={<Loader />}>
      <MainPage />
    </Suspense>
        )}
        </>
  );
};

export default Main;
