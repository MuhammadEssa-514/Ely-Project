import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReviewCard from '../ReviewCard/ReviewCrad'
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? +3 : prevSlide - 1));
  };
  return (
    <div className="">
      <div className="container flex justify-between">
        <div className="font-bold mt-2 ml-10 text-2xl">
          <h1>What our clients say</h1>
        </div>
        <div className="mr-10">
          <button onClick={previousSlide}>
            <BsArrowLeftShort className="border-2 border-blue-700 w-[48px] h-[48px] p-1 text-4xl rounded-[100px] hover:bg-blue-700 hover:text-white hover:cursor-pointer m-1" />
          </button>
          <button onClick={nextSlide} type="button">
            <BsArrowRightShort className="border-2 border-blue-700 w-[48px] h-[48px] p-1 text-4xl rounded-[100px] hover:bg-blue-700 hover:text-white hover:cursor-pointer m-1" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="">
          <div className="overflow-hidden ">
            <div
              className=" container  flex flex-wrap justify-center items-center transition-transform duration-300 ease-in-out gap-5"
              style={{
                transform: `translateX(-${currentSlide * 25}%)`,
              }}
            >
              {[1].map((i) => (
                <ReviewCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10 mt-5">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentSlide ? "bg-blue-700" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}