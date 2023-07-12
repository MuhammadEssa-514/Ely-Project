import React from "react";
const Button = ({ label, width, height, variants }) => {
  return (
    <div>
      {variants === "primary" && (
        <button
          className={`${width} ${height} bg-[#0C50CA] hover:bg-[#336ECC] rounded text-center text-[#FFFFFF]  font-[Poppins] font-semibold leading-4 text-[18px] uppercase flex justify-center content-center items-center `}
        >
          {label}
        </button>
      )}
      {variants === "secondary" && (
        <button
          className={`${width} ${height} bg-[#FFFFFF] border-2 border-[#0C50CA] rounded text-center text-[#0C50CA]  font-[Poppins] font-semibold leading-4 text-[18px] uppercase flex justify-center content-center items-center`}
        >
          {label}
        </button>
      )}
    </div>
  );
};
export default Button;
