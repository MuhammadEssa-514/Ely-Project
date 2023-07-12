import React from "react";

export default function FilterDiv(props) {
  const { image } = props;
  return (
    <div>
      <div style={{ backgroundImage: `url(${image})` }}
         className="w-[140px] h-[140px] max-[1792px]:w-[113px] max-[1792px]:h-[113px] m-0 flex justify-center items-center bg-cover bg-no-repeat hover:bg-blue-700">
      </div>
    </div>
  );
}
