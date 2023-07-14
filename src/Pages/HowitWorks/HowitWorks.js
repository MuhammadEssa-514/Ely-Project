import React from 'react'
import SideBar from '../../Component/SideBar/SideBar'
import MyListing from '../../Component/MyListing/MyListing'

export default function HowitWorks() {
      return (
   <>
   <section className='container m-auto'>

    <h1 className='text-[60px] font-bold pb-10 ml-[368px]'>My Listing</h1>
    <div className='flex'>
          <div className="sidebar"><SideBar/></div>
          <div className="list"><MyListing/></div>
    </div>
    
   </section>
   {/* <SideBar/>
   <MyListing/> */}
   </>
  )
}
