import React from 'react'
import SideBar from '../../Component/SideBar/SideBar'
import MyListing from '../../Component/MyListing/MyListing'

export default function HowitWorks() {
  return (
   <>
   <section className='flex container m-auto'>
    <div className="sidebar"><SideBar/></div>
    <div className="list"><MyListing/></div>
   </section>
   {/* <SideBar/>
   <MyListing/> */}
   </>
  )
}
