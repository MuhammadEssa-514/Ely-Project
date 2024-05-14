import React,{useState,useEffect} from 'react'
import {img1,img2,img4,img5,img6,img7,img8,} from "..//../images/index.js"

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
            image:img2,
            model:"2990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"2WD"

        },
        {
            id:3,
            image:img4,
            model:"3990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"3WD"

        },
        {
            id:4,
            image:img5,
            model:"4990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"4WD"

        },
        {
            id:5,
            image:img6,
            model:"5990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"5WD"

        },
        {
            id:6,
            image:img8,
            model:"6990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"6WD"

        },
        {
            id:7,
            image:img7,
            model:"7990",
            name:"Mitsubishi Delica Star Wagon",
            engine:"7WD"

        },
    ]
  return (
    <>
    <div className="main w-[1072px] h-[108px]">
      {list.map((i)=>(
        <div className="list1 flex justify-between items-center border mb-2" key={i.id}>
        <div className="content text-[18px] font-bold flex items-center">
            <div className='w-[152px] h-[108px]'><img src={i.image} alt="images for list" /></div>
            <h3 className='pl-5'>{i.model} {i.name} {i.engine}</h3>
        </div>
       <p  className='pr-5 text-gray-400'>ON {currentTime}</p>
     </div>
      ))}
    </div>
    </>
  )
}

export default MyListing