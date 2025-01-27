import React from "react";
import HomeLayout from "../layouts/home";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import Card from "../components/common/Card";

const Home = () => {
  const navigate = useNavigate();
  const { authTokens } = useAuth();

  const handleNavigate = () => {
    if (authTokens) {
      if (
        window.localStorage.subscription &&
        authTokens.email === window.localStorage.subscription.email
      ) {
        navigate("/main");
      } else {
        alert("First, You must pay!");
        navigate("/pricing");
      }
    } else {
      alert("First, You must login!");
      navigate("/login");
    }
  };

  const cards = [
    {
      icon: "/graphic/home/v2.svg",
      title: " Transform Objections into Opportunities",
      subtitle:
        "Objections aren't setbacks; they're your next breakthrough. Navigate every challenge with ease and assurance.",
    },
    {
      icon: "/graphic/home/v2.svg",
      title: " Transform Objections into Opportunities",
      subtitle:
        "Objections aren't setbacks; they're your next breakthrough. Navigate every challenge with ease and assurance.",
    },

    {
      icon: "/graphic/home/v3.svg",
      title: " Continuous Growth, One Call at a Time",
      subtitle:
        "Every call, every pitch, every day – it's your journey to sales mastery. We're here to accelerate it.",
    },
  ];

  return (
    <HomeLayout>
      <div className="w-[100%] h-[100%] flex flex-col items-center scroll-bar-cool111 overflow-y-auto">
        <h1 className="laptop:text-[25px] mobile:text-[20px]  font-medium mt-[100px] text-center">
          Unleashing Potential
        </h1>
        <h1 className="mobile:text-[24px] laptop:text-[35px] text-[#2C3C4D] laptop:w-[500px] font-extrabold mt-[10px] text-center">
          Your AI Sales Assistant, Reimagining Success.
        </h1>
        <p className="laptop:text-[20px] mobile:text-[15px] px-[10px] laptop:w-[500px]    text-[#8C959F] mt-[10px] text-center">
          Discover not just a tool, but a transformation. Achieve the sales
          outcomes you've only dreamed of." CTA Button: "Unlock Your Potential
        </p>
        <div
          onClick={handleNavigate}
          className="cursor-pointer flex items-center font-bold tracking-wide justify-center mobile:px-[50px] laptop:px-[35px] mt-[20px] py-[12px] rounded-[5px] bg-[#E14857] text-[#fff] text-[11px] ">
          Start for free
        </div>
        <h1 className="text-[24px] px-[10px] laptop:w-[500px]  font-bold mt-[50px] text-center">
          Real Outcomes. Real Growth.
        </h1>
        <h1 className="text-[16px] px-[10px] laptop:w-[500px] font-medium text-[#818181] mt-[10px] text-center">
          Following are top features and benefits.
        </h1>
        <div className="w-[100%] relative mobile:px-[10px] laptop:px-[150px] py-[50px] laptop:flex-row mobile:flex-col flex items-center justify-between">
          <img
            src="/graphic/home/elli.svg"
            className="w-[120px] h-[120px] absolute bottom-[0px] left-[140px]"
            alt=""
          />

          {cards.map((card) => {
            return (
              <Card
                key={card.title}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
              />
            );
          })}
        </div>
        <div className="w-[100%] mt-[120px] relative pb-[100px]">
          <img
            src="/graphic/home/imp.svg"
            className="w-[100%] z-0 h-[100%] object-cover absolute"
            alt=""
          />
          <div className="w-[100%] z-10 relative mobile:py-[30px] laptop:py-[60px]">
            <h1 className="text-[#fff] mobile:text-[26px] laptop:text-[35px] flex flex-col items-center font-bold text-center">
              Integration Spotlight
              <div className="w-[180px] h-[5px] rounded-[12px] bg-[#fff] mt-[10px]"></div>
            </h1>
            <div className="w-[100%] items-center mobile:flex-col laptop:flex-row flex px-[10px] laptop:px-[100px] mt-[20px]">
              <img
                src="/graphic/home/imp1.svg"
                className="w-[350px] shrink-0 laptop:mt-0 mobile:mt-[30px]"
                alt=""
              />
              <div className="w-[100%] laptop:h-[100%] mt-[10px] flex-col flex justify-center mobile:px-[15px] laptop:px-[150px]">
                <h1 className="text-[#fff] text-[30px] font-bold mobile:text-center laptop:text-left">
                  Your Tools, Supercharged
                </h1>
                <h1 className="text-[#fff] text-[22px] font-medium leading-[40px] mt-[20px] mobile:text-center laptop:text-left">
                  Seamlessly integrate and amplify the power of your favorite
                  tools. It's not about adding more; it's about achieving more
                </h1>
              </div>
            </div>
            <div className="flex w-[100%] items-center justify-center">
              <div className=" flex items-center justify-center px-[30px] py-[12px] rounded-[8px] cursor-pointer mt-[50px] font-bold text-[#fff] border-[3px] border-[#fff]">
                Explore More
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </HomeLayout>
  );
};

export default Home;
