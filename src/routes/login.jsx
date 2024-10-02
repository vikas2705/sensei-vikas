import React, { Suspense } from "react";
import Loader from "../components/common/Loader.jsx";

const LoginPage = React.lazy(() => import("../views/login.jsx"));

const Login = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LoginPage />
    </Suspense>
  );
};

export default Login;
