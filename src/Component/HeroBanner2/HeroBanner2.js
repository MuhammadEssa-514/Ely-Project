import React from 'react'
import MainImg from '../../images/car,bike.png'

export default function HeroBanner2() {
  return (
    <div className='w-[100%]  bg-gray-100 grid grid-cols-1 sm:grid-cols-2'>
    <div className='h-[320px]'>
        <h1 className='text-[40px] font-bold pl-32 pt-20 leading-snug	'>Simply buy <span className='text-blue-800'>your Favoriate</span> <br/> product online</h1>
        <p className='text-[18px] font-normal pl-32 pt-5 leading-4'>You Order your Car Completely Online.</p>
    </div>
    <div className='h-[320px]'>
        <img alt='MainImage.....' src={MainImg} />
    </div>
    </div>
    
  )
}
