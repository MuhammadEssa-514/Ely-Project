import React from 'react'
import Button from "../Button/Button";
import Img from "../../images/HowItsWorkBanner.png";

export default function HowItsWorkBanner() {
  return (
    <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-wrap justify-center lg:justify-end items-center">
          <div className="w-[80%] bg-white">
            <h1 className="text-[48px] font-bold">
              How It <span className="text-blue-600">Work</span>
            </h1>
            <p className="text-[20px] leading-[30px] mt-[15px] pr-10">
            ElyX’s knowledge able community of more than 450,000 users and over 200,000 registered bidders vets each listing so potential buyers can bid with confidence.
            </p>
            <div className="mt-10">
              <Button
                label="Browse Auction"
                height={"h-[72px]"}
                width={"w-[224px]"}
                variants="primary"
              />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Img})` }}
          className="h-[80vh] bg-cover"
        ></div>
      </div>
  )
}
