import React from 'react'
import Aution from '../../Component/Auction Details/Auction'
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import { PopularItems } from '../../Component';
// import Footer from '../../Component/Footer/Footer';

export default function ActionDetails() {
  return (
    <div>
      <Breadcumb/>
      <div className='container'>
      <Aution/>
      </div>
      <div>
      <PopularItems/>
      </div>

      <section>
      <div>
        {/* <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" /> */}
      </div>
      </section>
    </div>
  )
}
