import React from "react";
import Button from "../Button/Button";

export default function PlanPricing() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-content-evenly">
      <div className="bg-white text-center border-2 border-gray-200">
        <h1 className="text-[36px] font-bold mt-10">STARTER</h1>
        <p className="text-[21px] text-gray-400 font-normal mt-5">
          No-reserve listings and <br /> returning sellers
        </p>
        <h1 className="text-[60px] font-extrabold text-primary mt-5">$49</h1>
        <p className="text-[21px] text-gray-400 font-normal">
          One time Payment
        </p>
        <div className="flex justify-center m-8">
          <Button
            label="Submit for auctions"
            height={"h-[64px]"}
            width={"w-[298px]"}
            variants="secondary"
          />
        </div>
      </div>
      <div className="bg-white text-center border-2 border-gray-200 relative">
        <div className="absolute -top-8 flex justify-center w-full">
          <Button
            label="MOST POPULAR"
            height={"h-[54px]"}
            width={"w-[222px]"}
            variants="primary"
          />
        </div>

        <h1 className="text-[36px] font-bold mt-10">GROWTH</h1>
        <p className="text-[21px] text-gray-400 font-normal mt-5">
          Reserve listings from first-time <br /> sellers
        </p>
        <h1 className="text-[60px] font-extrabold text-primary mt-5">$399</h1>
        <p className="text-[21px] text-gray-400 font-normal">
          One time Payment
        </p>
        <div className="flex justify-center m-8">
          <Button
            label="Submit for auctions"
            height={"h-[64px]"}
            width={"w-[298px]"}
            variants="primary"
          />
        </div>
      </div>
      <div className="bg-white text-center border-2 border-gray-200">
        <h1 className="text-[36px] font-bold mt-10">PRO</h1>
        <p className="text-[21px] text-gray-400 font-normal mt-5">
          For significant Products, give us
          <br /> a call & we’ll handle the rest.
        </p>
        <h1 className="text-[60px] font-extrabold text-primary mt-5">$49</h1>
        <p className="text-[21px] text-gray-400 font-normal">
          One time Payment
        </p>
        <div className="flex justify-center m-8">
          <Button
            label="Submit for auctions"
            height={"h-[64px]"}
            width={"w-[298px]"}
            variants="secondary"
          />
        </div>
      </div>
    </div>
  );
}
