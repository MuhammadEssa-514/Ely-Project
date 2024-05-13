import React from 'react'
import SideBar from '../../Component/SideBar/SideBar'
import MyListing from '../../Component/MyListing/MyListing'
// import MyBids from '../../Component/MyBids/MyBids'
// import Footer from '../../Component/Footer/Footer'
import Loginscreen from '../Loginscreen/Loginscreen'


export default function GetinEmail() {
  return (
    <>
      {/* MyListing */}
      <section className='container m-auto pb-[30%]'>
            <h1 className='text-[60px] font-bold pb-10 ml-[368px]'>My Listing</h1>
       <div className='flex'>
          <div className="sidebar"><SideBar/></div>
          <div className="list"><MyListing/></div>
       </div>
     </section>
     <section>
      <div>
        {/* <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" /> */}
      </div>

      <section>
      <div>
        <Loginscreen/>
      </div>
      </section>
      </section>

   {/* my Bids */}
   {/* <section className='container m-auto'>
    <h1 className='text-[60px] font-bold pb-10 ml-[368px]'>My Bids</h1>
    <div className='flex'>
          <div className="sidebar"><SideBar/></div>
          <div className="list"><MyBids/></div>
    </div>
   </section> */}


    </>
  )
}

