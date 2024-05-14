import React from 'react'
import {ImHammer2} from 'react-icons/im';
import{AiOutlineDollarCircle,AiOutlineCamera ,} from 'react-icons/ai'
import{RiGalleryFill} from 'react-icons/ri'
import{FiCheckCircle} from 'react-icons/fi'

import{SlCalender} from 'react-icons/sl'
function PlaneProcess() {
  return (
    // main div
    <div className='bg-gray-100'>
    <div className='w-[1195px] m-auto   '>
    <div className='pb-[10%]'>
    <h1 className='font-bold text-[50px] flex justify-center'>How Its Work</h1>
    </div>
    <div className='flex gap-8 '>

    {/* first div */}
    
    <div className="left">
    
    <div className="main-conent w-[522px]  flex items-center mb-40">
        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>01.</h1>
             <p className='text-[24px]'>Submit your Product for auction </p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <ImHammer2 className='w-[62px] h-[60px] text-primary '/>
        </div>

    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative left-[43px]'></div>
    </div>

    
    <div className="main-conent w-[522px]  flex items-center mb-40">
        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>03.</h1>
             <p className='text-[24px]'>Your pay one time processing fees</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <AiOutlineDollarCircle className='w-[62px] h-[60px] text-primary '/>
        </div>
        
        <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative left-[43px]'></div>
    
    </div>


    
    <div className="main-conent w-[522px]  flex items-center mb-40">
        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>05.</h1>
             <p className='text-[24px]'>Pro photos are shot</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <RiGalleryFill className='w-[62px] h-[60px] text-primary '/>
        </div>
    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative left-[43px]'></div>

    </div>


    <div className="main-conent w-[522px]  flex items-center mb-40">
        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>07.</h1>
             <p className='text-[24px]'>you approve the listing</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <RiGalleryFill className='w-[62px] h-[60px] text-primary '/>
        </div>
    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative left-[43px]'></div>
    </div>

    </div>
    {/* bech ka line */}
    <div className='border-r-2 border-grey-400  mt-[64px]  h-[1030px]'></div>
    {/* second div */}

    <div className="right mt-40   ">

    <div className="main-conent w-[522px] h-[120px]  flex items-center mb-40 ">
    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative right-[43px]'></div>

        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>02.</h1>
             <p className='text-[24px]'>We accept the ones that fit</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <FiCheckCircle className='w-[62px] h-[60px] text-primary '/>
        </div>
    </div>


    <div className="main-conent w-[522px]  flex items-center mb-40">
    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative right-[43px]'></div>

        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>04.</h1>
             <p className='text-[24px]'>We schedule pro photos for your products</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <AiOutlineCamera className='w-[62px] h-[60px] text-primary '/>
        </div>
    </div>

    <div className="main-conent w-[522px]  flex items-center mb-40">
    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative right-[43px]'></div>

        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>06.</h1>
             <p className='text-[24px]'>we write the auction listing</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <RiGalleryFill className='w-[62px] h-[60px] text-primary '/>
        </div>
    </div>

    <div className="main-conent w-[522px]  flex items-center mb-20">
    <div className='w-[20px] h-[20px] rounded-full border border-blue-400 relative right-[43px]'></div>

        <div className="content w-[300px]">
             <h1 className='font-bold text-[48px] text-primary'>08.</h1>
             <p className='text-[24px]'>we schedule the listing</p>
        </div>
        <div className="icon w-[120px] h-[120px] bg-white rounded-lg m-auto flex justify-center items-center">
            <SlCalender className='w-[62px] h-[60px] text-primary '/>
        </div>
    </div>

    </div>
       
        
    </div>
    </div>
    </div>
  )
}

export default PlaneProcess
