import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
import { useAuth } from "../../context/auth";

const Item = ({ title, route }) => {
  const location = useLocation();
  const selected = location.pathname === route;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(route);
      }}
      className="mr-[50px] cursor-pointer">
      <p
        className={`text-[11px] ${selected ? 'font-bold text-[#E14857]': 'text-[#727272]'}`}>
        {title}
      </p>
      {selected && (
        <div className="w-[20px] h-[3px] bg-[#E14857] mt-[3px] rounded-[21px]"></div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { authTokens, setAuthTokens } = useAuth();
  const width = useWidth();
  const navigate = useNavigate();
  const goUrl = (route) => {
    navigate(route);
  };

  return (
    <div className="w-[100%] h-[100px] shrink-0 justify-between flex items-center laptop:px-[40px]">
      {width < 1000 ? (
        <Link to="/">
          <div className="w-[100%] h-[100%] flex items-center justify-center relative">
            <img
              src="/menu.svg"
              alt=""
              className="w-[38px] absolute left-[20px]"
            />
            <img
              src="/logoNew.svg"
              className="w-[38px] cursor-pointer"
              alt=""
            />
          </div>{" "}
        </Link>
      ) : (
        <>
          <Link to="/">
            <img src="/logoNew.svg" alt="" className="w-[50px]" />
          </Link>

          <div className="flex items-center">
            <Item title="Home" route="/" />
            <Item title="Pricing" route="/pricing" />
            {!authTokens ? (
              <>
                <Item title="Log in" route="/login" />
                <div
                  onClick={() => {
                    goUrl("/signUp");
                  }}
                  className="cursor-pointer flex items-center justify-center px-[30px] py-[10px] rounded-[5px] bg-[#E14857] text-[#fff] font-medium text-[11px] ">
                  Sign Up
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    window.localStorage.removeItem("subscription");
                    setAuthTokens();
                    navigate("/", { replace: true });
                  }}
                  className="mr-[50px] cursor-pointer">
                  <p className="text-[11px] font-bold">{"logout"}</p>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-green-700 flex justify-center cursor-pointer">
                  <p
                    className="font-bold bg-white	text-[28px]"
                    >
                    {authTokens.email &&
                      authTokens.email.substr(0, 1).toLocaleUpperCase()}
                  </p>
                </div>
              </>
            )}
            <img
              src="/download.svg"
              className="w-[20px] ml-[40px] cursor-pointer"
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
