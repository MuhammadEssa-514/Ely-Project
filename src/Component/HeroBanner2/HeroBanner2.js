import React from 'react'
import MainImg from '../../images/car,bike.png'

export default function HeroBanner2() {
  return (
    <div className='w-[100%]  bg-[#F8F8FF] flex flex-wrap'>
    <div className='w-[50%] h-[320px]'>
        <h1 className='text-[40px] font-bold pl-32 pt-20 leading-snug	'>Simply buy <span className='text-blue-800'>your Favoriate</span> <br/> product online</h1>
        <p className='text-[18px] font-normal pl-32 pt-5 leading-4'>You order your car completely online.</p>
    </div>
    <div className='w-[50%] h-[320px]'>
        <img src={MainImg} />
    </div>
    </div>
    
  )
}
