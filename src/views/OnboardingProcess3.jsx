import React from "react";
import AuthLayout from "../layouts/auth";
import DropDown from "../components/common/Dropdown";

const OnboardingProcess3 = ({setpage}) => {
  return (
    <AuthLayout r={"/graphic/auth/g4.svg"}>
      <div className="w-[100%] h-[100vh] py-[100px] mobile:px-[25px] laptop:px-[80px]">
        <div className=" mobile:w-[100%] laptop:w-[500px]  h-[100%] flex flex-col justify-center">
          <h1 className="text-[35px] mb-[20px] font-extrabold">
            What is the size of your company?
          </h1>
          <DropDown list={["Select"]} />
          <div className="laptop:w-[280px] mobile:w-[100%] h-[50px] mt-[50px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"onClick={() => setpage(4)}>
            Continue
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OnboardingProcess3;
