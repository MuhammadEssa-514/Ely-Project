import React from "react";
import Button from "../Button/Button";

const PopularItems = () => {
  return (
    <>
      <div className="flex justify-around items-center m-10">
        <div>
          <h1 className="capitalize font-bold text-4xl leading-10">
            the <span className="text-[#0C50CA] ">best marketplace</span> for All
            Products
          </h1>
        </div>
        <div>
          <Button
            className=""
            label="BROWSE AUCTION"
            height={"h-[72px]"}
            width={"w-[268px]"}
            variants="primary"
          />
        </div>
      </div>
    </>
  );
};

export default PopularItems;
