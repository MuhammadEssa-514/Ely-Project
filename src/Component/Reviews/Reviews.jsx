import React, { useState } from "react";
// import avatarImage from "../../image/avatar.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
const data = [
  {
    id: 1,
    name: "Anne Johnson",
    avatar: "https://ca.slack-edge.com/T01TCUZ0490-U01T661DHP0-ee5027f84275-512",
    rating: 3,
    review: "Kinda normal app review",
  },
  {
    id: 2,
    name: "Muhammad Irfan",
    avatar: "https://ca.slack-edge.com/T01TCUZ0490-U01T661DHP0-ee5027f84275-512",
    rating: 5,
    review: "Hi, this app is great",
  },
  {
    id: 3,
    name: "Muhammad Abbas",
    avatar: "https://media.licdn.com/dms/image/D4E03AQEdg5GFjsTmXg/profile-displayphoto-shrink_400_400/0/1682941627533?e=1690416000&v=beta&t=C2ZnTj-TmaLluYz3eyaWRABkz8vegtiLG-ROfbkC9YA",
    rating: 2,
    review: "This app really sucks",
  },
  {
    id: 4,
    name: "Muhammad Saqlain",
    avatar: "https://avatars.githubusercontent.com/u/104670161?v=4",
    rating: 4,
    review: "This app is really amazing",
  },
];
function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col items-center">
    <div className="text-[40px] font-bold text-center pb-10">
      <h1>Client Testimonials</h1>
    </div>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handleLeftClick}
          className="border border-gray-600 rounded-full p-2 mr-4 hover:bg-blue-600 hover:text-white"
        >
          <BiLeftArrowAlt />
        </button>
        <div className="flex items-center justify-center w-full">
          {data.map((reviewData, index) => (
            <div
              key={reviewData.id}
              className={`h-[250px]  2xl:w-[1060px]  xl:w-[780px] lg:w-[600px] md:w-[480px] sm:w-[200px] bg-white text-center pl-10 pr-10 pt-[25px] rounded-lg ${
                index === currentIndex ? "" : "hidden"
              }`}
            >
              <img
                src={reviewData.avatar}
                alt="Avatar"
                className="w-[72px] h-[72px] mx-auto rounded-full"
              />
              <h1 className="my-3 text-2xl font-semibold">{reviewData.name}</h1>
              <p className="text-lg text-[#37474F] font-normal mt-2">
                {reviewData.review}
              </p>
              <div className="flex justify-center items-center text-center text-[30px] mt-[18px]">
              {[...Array(Math.floor(reviewData.rating))].map((_, i) => (
                <AiFillStar key={i} style={{ color: "#0C50CA" }} />
              ))}
              {[...Array(5 - Math.floor(reviewData.rating))].map((_, i) => (
                <AiOutlineStar key={i} style={{ color: "lightgray" }} />
              ))}
            </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleRightClick}
          className="border border-gray-600 rounded-full p-2 ml-4 hover:bg-blue-600 hover:text-white"
        >
          <BiRightArrowAlt />
        </button>
      </div>
      <div className="flex mt-[2.5%] justify-center ">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-700" : "bg-gray-400 bg-"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
    </div>
  );
}
export default Reviews;