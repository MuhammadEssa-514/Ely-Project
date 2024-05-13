import React,{useState} from 'react'
import Button from "../Button/Button";
import { img9,img10,img11,img12,img4,img8,img3,car8 } from '../../images'

function MyBids() {

const [currentTime]=useState(new Date().toLocaleDateString())

    const bids=[
        {
            id:1,
            image:img9,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        },{
            id:2,
            image:img10,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        },{
            id:3,
            image:img11,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        },{
            id:4,
            image:img12,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        },{
            id:5,
            image:img3,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        },{
            id:6,
            image:car8,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        },
        {
            id:7,
            image:img4,
            model:1990,
            name:"Mitsubishi Delica Star Wagon",
            engine:"Exceed 4WD"
        }
        
    ]
  return (
    <>
    <div className="main w-[1072px] h-[108px]">
        {bids.map((p)=>(
            <div className="bid1 flex justify-between items-center border mb-2 font-bold" key={p.id}>
                <div className="forf flex items-center">
                <div className="img w-[152px] h-[108px]"><img src={p.image}/></div>
                <div className="content text-[18px]">
                    <h2 className='pl-5 mb-2'>{p.model} {p.name} {p.engine}</h2>
                    <p className='pl-5'>ON {currentTime}</p>
                </div>
                </div>
                <div className="buttons flex gap-5 pr-5">
                <Button 
               
              label="BID 160,600"
              height={"h-[36px]"}
              width={"w-[120px]"}
              variants="secondary"
            />
            <Button
              label="CONFIRM"
              height={"h-[36px]"}
              width={"w-[120px]"}
              variants="primary"
            />
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default MyBids