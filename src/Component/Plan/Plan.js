import React from 'react';
import { AiOutlineDollar } from "react-icons/ai";
import { GiPoliceOfficerHead } from "react-icons/gi";


function Plan() {
  return (
    <div className='mt-28  w-[668px] h-[499px] '>
      <h1 className='text-[60px] font-Poppins font-bold text-[#353535] w-[660px] h-[60px]'>Submit For Auctions</h1>
      <p className='w-[660px] opacity-75 mt-6 text-[#9A9A9A] text-[23px] h-[60px]'>Submitting to a Auction is easy. Simply ship the items to us and your job is done.</p>

      <div className='flex  mt-8 gap-4'>
  <AiOutlineDollar className='text-[blue] text-[70px] bg-[#F8F8FF] p-4 mt-2'/>
    <p className='w-[556px] mt-1 text-[23px] h-[54px]'>Sellers receive 100% of the sale price and pay only the listing fee.</p>
      </div>
      <div className='flex  mt-12 gap-4'>
    <GiPoliceOfficerHead className='text-[blue] text-[70px] bg-[#F8F8FF] p-4 mt-2'/>
    <p className='w-[556px] mt-1 text-[23px] h-[54px]'>Our dedicated team will get your auction started quickly.</p>
      </div>

      <button  className="bg-blue-700 text-white text-center p-4 rounded mt-12">SUBMIT FOR AUCTION</button>
    </div>
  );
}

export default Plan;
