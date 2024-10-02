import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, r }) => {
  return (
    <div className="w-[100%] h-[100vh] relative overflow-hidden">
      <Link to="/">
        <img
          src="/logoNew.svg"
          className="absolute top-[20px] z-20 w-[50px] left-[30px]"
          alt=""
        />
      </Link>
      <img
        src={r}
        className="absolute w-[100%] laptop:w-[30%] mobile:top-[-30px] laptop:top-0 z-0 mobile:right-[-50px] laptop:right-0"
        alt=""
      />
      <div className="w-[100%] h-[100vh] absolute z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
