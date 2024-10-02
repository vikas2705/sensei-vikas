import React from "react";
import AuthLayout from "../layouts/auth";
import DropDown from "../components/common/Dropdown";

const OnboardingProcess1 = (props) => {
  return (
    <AuthLayout r={"/graphic/auth/g2.svg"}>
      <div className="w-[100%] h-[100vh] py-[100px] mobile:px-[25px] laptop:px-[80px]">
        <div className=" mobile:w-[100%] laptop:w-[500px] h-[100%] flex flex-col justify-center">
          <h1 className="text-[35px] font-extrabold">Fill these details</h1>

          <div className="grid laptop:grid-cols-2 gap-[20px] mobile:w-[100%] laptop:w-[900px] mt-[40px]">
            <div className=" border-[1px] h-[60px] overflow-hidden  rounded-[4px] border-[#0000006B] flex ">
              <input
                type="text"
                className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                placeholder="First Name*"
                name="firstname"
                value={props.firstname}
                onChange={(e) => props.setInput(e)}
              />
            </div>
            <div className=" border-[1px] h-[60px] overflow-hidden  rounded-[4px] border-[#0000006B] flex ">
              <input
                type="text"
                className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                placeholder="Last Name*"
                name="lastname"
                value={props.lastname}
                onChange={(e) => props.setInput(e)}
              />
            </div>

            <DropDown
              role={0}
              change={props.setJob}
              title="Job Title"
              list={["Web developer", "App Developer"]}
            />
            <DropDown
              role={1}
              change={props.setCountry}
              title="Country"
              list={["India", "Australia"]}
            />
          </div>
          {props.error && <p>{props.error}</p>}
          <div
            className="w-[100%] h-[60px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"
            onClick={() => props.setpage(2)}>
            Continue
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OnboardingProcess1;
