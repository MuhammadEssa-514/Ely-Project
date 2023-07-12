import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const data = [
  {
    id: 1,
    name: "Anne Johnson",
    avatar: "https://ca.slack-edge.com/T01TCUZ0490-U050LNWQ9B8-d728b6789b23-512",
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
    review: "This app really Amizing",
  }
];
function ReviewCard() {
  return (
    <>
      {data.map((reviewData) => {
        const starRating = [];
        const fullStars = Math.floor(reviewData.rating);
        // the full stars
        for (let i = 0; i < fullStars; i++) {
          starRating.push(
          <AiFillStar
           key={i}
            style={{ color: "#0C50CA" }} />);
        }
        // Add empty
        while (starRating.length < 5) {
          starRating.push(
            <AiOutlineStar
              key={starRating.length}
              style={{ color: "lightgray" }}
            />
          );
        }
        return (
          <div
            key={reviewData.id}
            className="h-[350px] w-[326px] bg-white text-center pl-10 pr-10 pt-[55px] rounded-lg "
          >
            <img
              src={reviewData.avatar}
              alt="Avatar"
              className="w-[72px] h-[72px] mx-auto rounded-[200px]"
            />
            <h1 className="my-3 text-[24px] font-Poppins font-semibold">
              {reviewData.name}
            </h1>
            <p className="text-[16px] text-[#37474F] font-normal mt-[3px]">
              {reviewData.review}
            </p>
            <div className="flex justify-center items-center text-center text-[30px] mt-[18px]">
              {starRating}
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ReviewCard;