import React from "react";


export default function FilterDiv(props) {
  const {Icon, value} = props;
  return (
    <div>
      <div className="w-[150px] h-[150px] flex justify-center items-center m-0  bg-cover bg-no-repeat hover:bg-blue-700 hover:text-white">
      <div>
      <button href="#" className="text-6xl font-normal text-center">{Icon}</button>
      <h1 className="text-xl text-center p-2">{value}</h1>
      </div>
      </div>
      
    </div>
  );
}
