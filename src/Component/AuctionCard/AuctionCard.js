import React, { useState, useEffect } from "react";
import { CiClock2 } from "react-icons/ci";

const AuctionCard = ({image,price,model,name,engine,location}) => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const w = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    });
    return()=>{
      clearInterval(w)
    }
  }, []);

  return (
    <div>
      <div className=" main">
        <div className="image relative">
          <img
            className="w-[100%] h-[100%]"
            src={image}
            alt={name}
          />
          <div className="clip-polygon bg-blue-700 pr-10 price absolute bottom-0 left-0 p-1">
            <h1 className="ml-1 font-bold text-white font-size-22px pl-5 leading-5">
              <span className="text-xs font-semibold font-size-12px">
                BID
              </span>
              <br />
              {price}
            </h1>
          </div>
        </div>
        <div className="content">
          <h1 className="font-semibold font-size-18px line-height-26px ml-1 pt-5 capitalize text-lg tracking-wider pl-5 ">
            {model} {name} {engine}
          </h1>
          <p className="capitalize font-normal font-size-14px line-height-14px text-sm ml-1 mt-10 pl-5 ">
            {location}
          </p>
        </div>
        <div className="time flex ml-5 pt-4">
          <CiClock2 className="text-2xl text-blue-700" />
          <p className="pl-1 pb-6 color-#353535 font-size-18px line-height-18px font-semibold tracking-widest">
            {currentTime}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AuctionCard