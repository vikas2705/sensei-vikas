import { useEffect, useState } from "react";

const DropDown = ({ list, change, title }) => {
  const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onPointerDown = () => {
      if (!hover) {
        setClicked(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });

  return (
    <div className=" border-[1px] h-[60px]  relative  rounded-[4px] border-[#0000006B] flex ">
      <div
        onClick={() => {
          if (!clicked) {
            setClicked(true);
          }
        }}
        className="w-[100%] h-[100%] text-[16px] px-[12px] flex items-center  relative">
        {list[curr]}
        <img
          src="/down.svg"
          className="absolute right-[18px] cursor-pointer"
          alt=""
        />
      </div>
      {clicked && (
        <div
          onClick={() => {
            setCurr(0);
            change(0);
          }}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="border-[1px] flex-col absolute py-[10px] w-[100%] px-[10px] top-[70px] bg-[#fff]  rounded-[4px] border-[#0000006B] flex text-gray-500">
          {[title, ...list].map((item, i) => {
            return (
              <div
                onClick={() => {
                  setCurr(i);
                  change(i);
                }}
                style={{
                  color: curr === i ? "#fff" : "#000",
                  backgroundColor: curr === i ? "#E14857" : "#fff",
                }}
                className={`w-[100%] h-[40px] rounded-[3px] cursor-pointer font-bold mb-[10px] flex items-center justify-center ${
                  curr === i && i === 0 ? "cursor-not-allowed disabled" : ""
                }`}>
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;