import React, { useState, useEffect } from "react";
import { CiClock2 } from "react-icons/ci";

export const Details = (data) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

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
      <div className="flex text-[14px] bg-[#F8F8FF] p-3 rounded-md w-[100%] h-auto p-4 items-center hover:bg-[#353535] hover:text-white">
        <h1 className="flex-1">
          {data.model} {data.name} {data.engine}
        </h1>
        <div className="flex flex-wrap items-center">
          <p className="text-[14px]">{data.price}</p>
          <CiClock2 className="text-xl text-blue-700 ml-2 md:ml-10 mr-2" />
          <p>{currentTime}</p>
        </div>
      </div>

    </div>
  );
};


  export default Details;