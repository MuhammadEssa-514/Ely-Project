import React from 'react'
import car from "../../images/car.png"

function Random() {
  return (
    <div className='main w-full h-[100vh] bg-gradient-to-r from-black from-75% to-blue-700 to-25% flex justify-center items-center'>
       <div className=' flex justify-around '>
            <div className='w-[50%] h-[80vh] bg-[green]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos itaque laboriosam cumque, qui corporis similique veritatis possimus ex, omnis libero doloremque sint, amet nihil incidunt consequatur commodi est fugiat rem molestias nesciunt animi. Beatae repellendus quis enim quam nesciunt.</div>
            <div style={{backgroundImage:`url(${car})`}} className='m-auto w-[30%] h-[46vh] bg-[green] bg-no-repeat bg-cover'></div>
       </div>
    </div>
  )
}

export default Random