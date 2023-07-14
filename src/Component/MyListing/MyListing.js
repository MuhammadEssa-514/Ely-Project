import React,{useState,useEffect} from 'react'
import {img1,img2} from "..//../images"

function MyListing() {
    const [currentTime,setCurrentTime]=useState(new Date().toLocaleDateString())

    useEffect(()=>{
        const e=setInterval(()=>{
            setCurrentTime(new Date().toLocaleDateString())
        });
        return()=>{
            clearInterval(e)
        }
    })

    const list=[
        {
            id:1,
            image:img1,
            model:"1990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"1WD"

        },
        {
            id:2,
            image:img1,
            model:"2990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"2WD"

        },
        {
            id:3,
            image:img1,
            model:"3990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"3WD"

        },
        {
            id:4,
            image:img1,
            model:"4990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"4WD"

        },
        {
            id:5,
            image:img1,
            model:"5990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"5WD"

        },
        {
            id:6,
            image:img1,
            model:"6990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"6WD"

        },
        {
            id:7,
            image:img1,
            model:"7990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"7WD"

        },
    ]
  return (
    <>
    {/* <div className="main w-[1072px] h-[108px]">
        <div className="list1 flex ">
             <div className="img">
                 <img src={img1} alt="" className='w-[152px] h-[108px]'/>
             </div>
             <div className="content text-[18px] font-semibold flex">
                 <h3>1990 Mitsubishi Delica Star Wagon Exceed 4WD</h3>
                 <p className='justify-end'>2./3232/3</p>
             </div>
             </div>
    </div> */}


    <section>

    <div className="main w-[1072px] h-[108px]">
      {list.map((i)=>(
        <div className="list1 flex justify-between items-center border mb-2" key={i.id}>
        <div className="content text-[18px] font-semibold flex items-center">
           <img src={img1} alt="" className='w-[152px] h-[108px]'/>
           <h3 className='pl-5'>{i.model} {i.name} {i.engine}</h3>
        </div>
       <p  className='pr-5 text-gray-400'>ON {currentTime}</p>
     </div>
      ))}
    </div>
    </section>
    </>
  )
}

export default MyListing