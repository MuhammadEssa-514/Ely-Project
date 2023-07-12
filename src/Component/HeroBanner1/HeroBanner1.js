import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Img from "../../images/IMG-M.png";
import { MdWatchLater } from "react-icons/md";

export default function HeroBanner1() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="w-[100%] flex">
        <div className="w-[55%] flex flex-wrap justify-end items-center bg-white">
          <div className="w-[80%] bg-white">
            <select className="w-[150px] text-[20px] text-blue-700 font-normal p-2 border-blue-700 border-2">
              <option value="">Cars</option>
              <option value="">Bikes</option>
              <option value="">Watches</option>
              <option value="">Arts</option>
              <option value="">Sports</option>
              <option value="">Liquor</option>
              <option value="">Industry </option>
            </select>
            <h1 className="text-[48px] font-bold">
              2014 Mercedes Benz E350 <br /> 4MATIC Wagon
            </h1>
            <p className="text-[20px] leading-[30px] mt-[15px]">
              This 1990 Chevrolet Corvette ZR-1 is finished in black over
              matching leather and powered by a 32-valve 5.7-liter V8 paired
              with a six-speed manual transmission.
            </p>
            <div className="flex gap-10 my-5 uppercase mt-[35px]">
              <div>
                <h3 className="text-[20px] font-normal">Current bid :</h3>
                <h1 className="text-[#0C50CA] text-[36px] font-bold">
                  $215,000
                </h1>
              </div>
              <div className="mr-11">
                <h3 className="text-[20px] font-normal">City</h3>
                <h1 className="text-[#0C50CA] text-[36px] font-bold">
                  Lexington, KY
                </h1>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <MdWatchLater className="text-[30px] mr-1 text-blue-700" />
              <p className="font-bold tracking-widest">{currentTime}</p>
            </div>
            <div>
              <Button
                label="PLACE BID"
                height={"h-[72px]"}
                width={"w-[224px]"}
                variants="primary"
              />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Img})` }}
          className="w-[45%] h-[80vh] bg-cover"
        ></div>
      </div>
    </div>
  );
}
