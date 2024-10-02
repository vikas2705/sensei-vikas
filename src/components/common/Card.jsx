const Card = ( {icon, title, subtitle}) => {
    return (
      <div className="border-[3px] border-[#E14857] rounded-[12px] h-[100%] mobile:w-[90%] mobile:mt-[20px] laptop:mt-0 laptop:w-[29%] px-[40px] py-[30px]">
        <div className="w-[100%] flex flex-col items-center justify-center">
          <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#E14857] rounded-[30px]">
            <img src={icon} alt="" className="w-[40px]" />
          </div>
          <p className="text-[19px] font-bold mt-[17px] tracking-wide text-center">
            {title}
          </p>
          <p className="text-[15px] text-[#818181] font-medium mt-[12px] tracking-wide text-center">
            {subtitle}
          </p>
        </div>
      </div>
    );
}

export default Card;