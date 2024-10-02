const RadioContainer = ({ label, selected, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="h-[80px] cursor-pointer dropped relative flex items-center justify-between px-[25px]	 rounded-[4px] ">
      <div className="flex">
        <img src="/graphic/auth/peep.svg" className="w-[30px]" alt="" />
        <span className="font-bold ml-[10px]">{label}</span>
      </div>
      <div className="w-[27px] h-[27px] rounded-[50px] border-[2px] overflow-hidden p-[4px] border-[#E14857]">
        {selected && (
          <div className="w-[100%] h-[100%] bg-[#E14857] rounded-[50%]"></div>
        )}
      </div>
    </div>
  );
};

export default RadioContainer;