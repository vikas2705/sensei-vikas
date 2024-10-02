import React, { Suspense, } from "react";
import Loader from "../components/common/Loader.jsx";

const SignUpPage = React.lazy(() => import("../views/SignUp.jsx"));

const SignUp = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SignUpPage />
    </Suspense>
  );
};

export default SignUp;
