import React from 'react'
import HeroBanner2 from '../../Component/HeroBanner2/HeroBanner2'
import ProductList from '../../Component/ProductList/ProductList'

export default function SubmitForAuction() {
  return (
    <div>
      <section className='container m-auto'>
        <HeroBanner2/> 
      </section>

      <section>
        <ProductList/>
      </section>
    </div>
  )
}
