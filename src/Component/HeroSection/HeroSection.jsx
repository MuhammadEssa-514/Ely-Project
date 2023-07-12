import React, { useState, useEffect } from "react";
import Img from "../../images/imgcar.png";
import Button from "../Button/Button";
import TimeBtn from "./TimeBtn";

function HeroSection() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const startTimer = () => {
    const countDownDate = new Date("july 30,2023").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        alert("this is end");
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <div className="w-full h-auto flex relative ">
        <div className=" w-full 2xl:w-[70%] xl:w-[70%] lg:w-[70%] bg-[#353535] flex md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
          <div className="w-[705px] sm:w-[600px] xs:w-[310px] my-[118px] ml-[240px] lg:ml-[20px] xl:w-[550px] lg:w-[400px] md:my-[100px] sm:ml-[10px] xs:mx-auto font-[Poppins] text-white xs:mt-[18px] md:ml-[20px]">
            <h1 className="text-[48px] lg:text-[30px] mb-2 lg:mb-0 xs:text-[28px]">
              2014 Mercedes-Benz E350 4MATIC Wagon
            </h1>
            <p className="text-[20px] lg:text-[16px] leading-[30px] lg:leading-[25px] capitalize pr-3 mt-[24px] lg:mt-[10px] xs:mt-[14px]">
              This 2014 Porsche Carrera GT is one of 1,270 examples built during
              a four-year production run and was delivered...
            </p>
            <div className="flex gap-20 xs:gap-5 my-1 uppercase mt-[48px] lg:mt-[20px] xs:flex-col xs:mt-[20px]">
              <div>
                <h3 className="text-[20px] lg:text-[16px] leading-[18px]">
                  Current bid:
                </h3>
                <h1 className="text-[#0C50CA] text-[36px] lg:text-[22px] xs:text-[30px] leading-[36px] mt-[6px]">
                  $215,000
                </h1>
              </div>
              <div className="mr-11">
                <h3 className="text-[20px] lg:text-[16px] leading-[18px]">
                  City :
                </h3>
                <h1 className="text-[#0C50CA] text-[36px] lg:text-[22px] xs:text-[30px] leading-[36px] mt-[6px]">
                  Lexington, KY
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-[30px] xs:mt-[20px]">
              <TimeBtn
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              />
            </div>
            <div className="mt-[48px] xl:mt-[35px] lg:mt-[25px] xs:mt-[20px]">
              <Button
                label="PLACE BID"
                height={"h-[72px]"}
                width={"w-[224px]"}
                variants="primary"
              />
            </div>
          </div>
          <div className="2xl:absolute 2xl:right-[15%] 2xl:top-[1%] xl:absolute xl:right-[5%] xl:top-[0%] lg:absolute lg:right-[4%] lg:top-[3%] md:ml-[20px] md:mt-[50px] sm:mx-auto xs:mx-auto border-black border-[20px] border-opacity-20">
            <img
              src={Img}
              alt=""
              className="w-[640px] h-[640px] xl:h-[550px] xl:w-[550px] lg:w-[500px] lg:h-[500px] xs:w-[310px]  xs:h-[310px] xs:my-3"
            />
          </div>
        </div>
        <div className="w-[30%] bg-[#0C50CA] hidden 2xl:block xl:block lg:block"></div>
      </div>
    </>
  );
}

export default HeroSection;
