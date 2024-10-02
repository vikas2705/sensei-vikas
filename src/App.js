import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import { AuthContext } from "./context/auth";

import "./index.css";
import Loader from "./components/common/Loader.jsx";

const Home = React.lazy(() => import("./routes/home.jsx"));
const Pricing = React.lazy(() => import("./routes/pricing.jsx"));
const SignUp = React.lazy(() => import("./routes/signUp.jsx"));
const Main = React.lazy(() => import("./routes/main.jsx"));
const CheckoutForm = React.lazy(() => import("./routes/checkoutForm.jsx"));
const Login = React.lazy(() => import("./routes/login.jsx"));

export default function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />{" "}
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signUp"
            element={
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/pricing"
            element={
              <Suspense fallback={<Loader />}>
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="/main"
            element={
              <Suspense fallback={<Loader />}>
                <Main />
              </Suspense>
            }></Route>
          {/*Protected routes */}
          <Route
            path="/checkoutForm"
            element={
              <ProtectRoute>
                <Suspense fallback={<Loader />}>
                  <CheckoutForm />{" "}
                </Suspense>
              </ProtectRoute>
            }
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
