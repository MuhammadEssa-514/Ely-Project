import React from 'react'
import HeroBanner2 from '../../Component/HeroBanner2/HeroBanner2'
import ProductList from '../../Component/ProductList/ProductList'
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import { PopularItems } from '../../Component';
// import Footer from '../../Component/Footer/Footer';

export default function ActionListing() {
  return (
    <div>
      <section>
        <Breadcumb/>
        <HeroBanner2/> 
      </section>

      <section>
        <ProductList/>
      </section>
      <section >
      <PopularItems />
      </section>
      <section>
      <div>
        {/* <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" /> */}
      </div>
      </section>
    </div>
  )
}
