import React from 'react';
import avatarImage from "../../images/avata1.png";
import { GrStar, GrStarOutline } from "react-icons/gr";

const data = [
  {
    id: 1,
    name: "Sandhya Mer",
    avatar: avatarImage,
    rating: 5,
    review: "Profoundly appreciative to the team for a perfect listing and to this platform that brings so much attention from super cool enthusiasts. Thank you all!",
  },

];

function PlanRC() {
  return (
    <>
      {data.map((reviewData) => {
        const starRating = [];
        const fullStars = Math.floor(reviewData.rating);
        // the full stars
        for (let i = 0; i < fullStars; i++) {
          starRating.push(
          <GrStar
           key={i}
            style={{ color: "#0C50CA" }} />);
        }
        // Add empty
        while (starRating.length < 5) {
          starRating.push(
            <GrStarOutline
              key={starRating.length}
              style={{ color: "lightgray" }}
            />
          );
        }
        return (
          <div
            key={reviewData.id}
            className="justify-center h-[704px] w-[704px] bg-[#F8F8FF] text-center  pl-[20px]  pt-[70px] pb-[40px] rounded-lg "
          >
            <img
              src={reviewData.avatar}
              alt="Avatar"
              className="w-[120px] h-[120px] mx-auto rounded-[200px]"
            />
             <div className="flex justify-center items-center text-center text-[40px] mt-[35px]">
              {starRating}
            </div>
            <p className="text-[29px] text-[#37474F] font-normal  w-[584px] h-[136px] ml-[40px] mt-14">
              {reviewData.review}
            </p>
            <h1 className="mt-20 ml-12 text-[38px] w-[584px] font-Poppins font-semibold text-center">
              {reviewData.name}
            </h1>
           
           <div className='flex gap-2 justify-center mr-2 mt-10 mb-4'>
            <div className='w-[12px] h-[12px] bg-gray-500 rounded-full'></div>
            <div className='w-[12px] h-[12px] bg-gray-500 rounded-full'></div>
            <div className='w-[12px] h-[12px] bg-blue-800 rounded-full'></div>
            <div className='w-[12px] h-[12px] bg-gray-500 rounded-full'></div>
           
           </div>
           
          </div>
        );
      })}
    </>
  );
  
}

export default PlanRC;
