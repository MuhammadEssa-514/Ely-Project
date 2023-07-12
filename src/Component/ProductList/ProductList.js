import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../images/index.js";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid } from "react-icons/bs";
import Products from "../Products/Products";
import Button from "../Button/Button.jsx";
import { ImHammer2 } from "react-icons/im";
import { BsFillCarFrontFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineGlobal } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';



import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";


function ProductList() {
  // Function and state to toggledowbAuciton type
  const [auctionType, setAuctionType] = useState(true);

  const downAuctionType = () => {
    setAuctionType(!auctionType);
  };

  // Function and state to downShopCategory type
  const [shopCategory, setShopCategory] = useState(true);

  const downShopCategory = () => {
    setShopCategory(!shopCategory);
  };

  // Function and state to downShopCategory type
  const [price, setPrice] = useState(true);

  const downPrice = () => {
    setPrice(!price);
  };

  // Function and state to Brand 
  const [brand, setBrand] = useState(true);

  const downBrand = () => {
    setBrand(!brand);
  };

    // Function and state to more 
    const [more, setMore] = useState(true);

    const downMore = () => {
      setMore(!more);
    };

  const products= [
    {
      id: 1,
      price: "$100000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "7WD",
      location: "California,USA",
      image: img1,
    },
    {
      id: 2,
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "7WD",
      location: "California,USA",
      image: img2,

    },
    {
      id: 3,
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "7WD",
      location: "Californsia,USA",
      image:img3
    },
    {
      id: 4,
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "7WD",
      location: "California,USA",
      image: img4,
    },
    {
      id: 5,
      price: "$500000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "7WD",
      location: "California,USA",
      image: img5,
    },
    {
      id: 6,
      price: "$600000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "7WD",
      location: "California,USA",
      image: img6,
    },
    {
      id: 7,
      price: "$700000",
      name: "mitsubishi delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: img7,
    },
    {
      id: 8,
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "7WD",
      location: "California,USA",
      image: img8,
    },
  ]	
  return (
    <div>
      <section className="container m-auto flex">
        {/* ==========================filter  start here================== */}

        <div className="filter w-[399px] h-[1252px] border-2">

          <div className="px-5 py-5">
             <h1 className="text-[24px] font-bold mb-3">Similar Results</h1>
             <Button
              label="Remove Selection"
              height={"h-[48px]"}
              width={"w-[302px]"}
              variants="primary"
            />
          </div>

         {/* Dropdown for Auction Type */}
         <div className="">
           <button
          className="flex justify-between items-center w-full text-[16px] px-10 font-semibold"
          onClick={downAuctionType}
        >
        <div className="flex items-center gap-1 "><ImHammer2/>  Auctions</div> {auctionType ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>

         {/* Dropdown content */}
         {auctionType && (
    <div>
       <form className="Auction Type px-10 py-5 text-[12px] leading-7">

          <div className="flex flex-row  items-center">
            <input type="checkbox" value="recent-products" className=" h-4 w-4 flex-row items-center justify-center"/>
            <label for="Live products"> Live Now(178)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Premium products" className="h-4 w-4"/>
            <label for="Premium products"> Premium(196)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Not Reserve" className="h-4 w-4"/>
            <label for="Not Reserve"> Not Reserve(1)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Results" className="h-4 w-4"/>
            <label for="Results"> Results(10)</label>
          </div>

       </form>
    </div>
        )}
      </div>

 {/* Dropdown for Shop Catagery */}

         <div className="">
           <button
          className="flex justify-between items-center w-full text-[16px] px-10 font-semibold"
          onClick={downShopCategory}
        >
        <div className="flex items-center gap-1 "><BsFillCarFrontFill/>  Shop By Categoty</div> {shopCategory ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>

         {/* Dropdown content */}
         {shopCategory && (
    <div>
       <form className="shop catagory px-10 py-5 text-[12px] leading-7">

           <input type="text" className="w-full outline-none  border rounded p-1 mb-3 " placeholder={`e.g. art `} />
          
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="recent-products" className=" h-4 w-4 flex-row items-center justify-center"/>
            <label for="Live products"> Electronics(2)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Premium products" className="h-4 w-4"/>
            <label for="Premium products"> Fashion(13)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Not Reserve" className="h-4 w-4"/>
            <label for="Not Reserve"> Cars(23)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Results" className="h-4 w-4"/>
            <label for="Results"> Bikes(3)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="recent-products" className=" h-4 w-4 flex-row items-center justify-center"/>
            <label for="Live products"> Watches(32)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Premium products" className="h-4 w-4"/>
            <label for="Premium products"> Art(56)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Not Reserve" className="h-4 w-4"/>
            <label for="Not Reserve"> Liquar(56)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Results" className="h-4 w-4"/>
            <label for="Results"> Industry(56)</label>
          </div>

       </form>
    </div>
        )}
      </div>

 {/* Dropdown for price */}
 <div className="">
           <button
          className="flex justify-between items-center w-full text-[16px] px-10 font-semibold"
          onClick={downPrice}
        >
        <div className="flex items-center gap-1 "><SlCalender/>  Price</div> {price ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>

         {/* Dropdown content */}
         {price && (
    <div>
       <form className="price px-10 py-5 text-[12px]">

            <p className="text-center pb-2">$10k - $1606k</p>
          <div className="flex flex-row  items-center">
            <input type="range" min="$1K" max="$1606K" className="w-full"/>
          </div>
         

       </form>
    </div>
        )}
      </div>

      {/* Dropdown for Shop Catagery */}

      <div className="">
           <button
          className="flex justify-between items-center w-full text-[16px] px-10 font-semibold"
          onClick={downBrand}
        >
        <div className="flex items-center gap-1 "><AiOutlineGlobal/> Brand</div> {brand ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>

         {/* Dropdown content */}
         {brand && (
    <div>
       <form className="shop catagory px-10 py-5 text-[12px] leading-7">

           <input type="text" className="w-full outline-none  border rounded p-1 mb-3 " placeholder={`e.g. akershu `} />
          
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="recent-products" className=" h-4 w-4 flex-row items-center justify-center"/>
            <label for="Live products"> Audi(5)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Premium products" className="h-4 w-4"/>
            <label for="Premium products"> Kia(26)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Not Reserve" className="h-4 w-4"/>
            <label for="Not Reserve"> Suzuki(1)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Results" className="h-4 w-4"/>
            <label for="Results"> Honda(3)</label>
          </div> <div className="flex flex-row  items-center">
            <input type="checkbox" value="Not Reserve" className="h-4 w-4"/>
            <label for="Not Reserve"> Hundai(11)</label>
          </div>
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="Results" className="h-4 w-4"/>
            <label for="Results"> Skoda(2)</label>
          </div>

       </form>
    </div>
        )}
      </div>

      {/* Dropdown for Shop Catagery */}

      <div className="">
           <button
          className="flex items-center justify-center m-auto w-[302px] text-[16px] py-3 font-semibold border outline-none text-gray-500 rounded"
          onClick={downMore}
        >
        <div className="mr-3"><button>SeeMore</button></div> {more ? <AiFillCaretDown /> : <AiFillCaretUp />}
        </button>

         {/* Dropdown content */}
         {more && (
    <div>
       <form className="shop catagory px-10 py-5 text-[12px] leading-7">

          
          <div className="flex flex-row  items-center">
            <input type="checkbox" value="recent-products" className=" h-4 w-4 flex-row items-center justify-center"/>
            <label for="Live products"> Audi(5)</label>
          </div>
        

       </form>
    </div>
        )}
      </div>


      {/* == */}
        </div>

        {/* ==========================filter  end here================== */}

        <div className="productlist h-[1664px]">
          <div className="title flex justify-between py-5">
            <h1 className="text-[28px] font-bold">
              Live Now <span>(16)</span>
            </h1>
            <div className="flex items-center gap-3">
              <TfiMenuAlt className="text-[30px] hover:text-blue-700" />{" "}
              <BsGrid className="text-[30px] hover:text-blue-700" />
              <select className="p-3 outline-none border rounded">
                <option></option>
                <option>Bid: Low To High</option>
                <option>Bid: High To Low</option>
                <option>Latest</option>
              </select>
            </div>
          </div>
          {/* grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 */}
          <div className="products here">
          <div className="grid gap-9 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((detail=>{
              return(
              <Products
              price={detail.price}
              name={detail.name}
              model={detail.model}
              engine={detail.engine}
              location={detail.location}
              image={detail.image}
              />
              )
            }))}
          </div>
         
          </div>
          <div className="flex justify-between items-center pt-10 text-gray-400">
            <p>1-20 On 166+Results</p>
            <div className="buttons flex items-center">
              <button className="shadow py-3 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                <AiOutlineLeft />
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                1
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                2
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                3
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                4
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                5
              </button>
              <button className="shadow py-3 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
// ======================== dropdown list

// import React, { useState } from 'react';
// import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

// const ProductList = () => {
//   // State for managing the dropdown and checkbox selections
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to handle checkbox selection
//   const handleCheckboxChange = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   return (
//     <div className="w-64 bg-gray-200">
//       {/* Sidebar heading */}
//       <div className="p-4 bg-gray-300">Filter Options</div>

//       {/* Dropdown */}
//       <div className="p-4">
//         <button
//           className="flex x justify-between items-center w-full text-left bg-white py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
//           onClick={toggleDropdown}
//         >
//           Dropdown {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
//         </button>

//         {/* Dropdown content */}
//         {isOpen && (
//           <div className="bg-white mt-2 rounded-md border border-gray-300">
//             {/* Checkbox options */}
//             <div className="p-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox"
//                   onChange={() => handleCheckboxChange('Option 1')}
//                   checked={selectedOptions.includes('Option 1')}
//                 />
//                 <span className="ml-2">Option 1</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox"
//                   onChange={() => handleCheckboxChange('Option 2')}
//                   checked={selectedOptions.includes('Option 2')}
//                 />
//                 <span className="ml-2">Option 2</span>
//               </label>
//               {/* Add more checkbox options here */}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
// ===================================================
