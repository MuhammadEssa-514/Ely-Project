function TimeBtn({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <div className="flex text-center uppercase gap-5 xs:gap-1 lg:gap-2 ">
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[100px] sm:h-[100px] xs:w-[75px] xs:h-[75px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] md:text-[38px] sm:text-[30px] xs:text-[20px]">
          {timerDays}
        </h1>
        <h3 className="sm:text-[12px]">Days</h3>
      </div>
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[100px] sm:h-[100px] xs:w-[75px] xs:h-[75px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] md:text-[38px] sm:text-[30px] xs:text-[20px]">
          {timerHours}
        </h1>
        <h3 className="sm:text-[12px]">Hours</h3>
      </div>
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[100px] sm:h-[100px] xs:w-[75px] xs:h-[75px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] md:text-[38px] sm:text-[30px] xs:text-[20px]">
          {timerMinutes}
        </h1>
        <h3 className="sm:text-[12px]">Minutes</h3>
      </div>
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px]  xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[100px] sm:h-[100px] xs:w-[75px] xs:h-[75px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] md:text-[38px] sm:text-[30px] xs:text-[20px]">
          {timerSeconds}
        </h1>
        <h3 className="sm:text-[12px]">Seconds</h3>
      </div>
    </div>
  );
}

export default TimeBtn;
