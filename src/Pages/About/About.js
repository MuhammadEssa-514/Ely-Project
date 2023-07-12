import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../images/index";
import HeroBanner1 from "../../Component/HeroBanner1/HeroBanner1";
import Cardimg from "../../Component/Cardimg/Cardimg";
import Cta from "../../Component/Cta/Cta";
import Reviews from "../../Component/Reviews/Reviews";
import { Products } from "../../Component";

function About() {
  const products= [
    {
      id: 1,
      price: "$100000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "7WD",
      location: "California,USA",
      image: img1,
    },
    {
      id: 2,
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "7WD",
      location: "California,USA",
      image: img2,

    },
    {
      id: 3,
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "7WD",
      location: "Californsia,USA",
      image:img3
    },
    {
      id: 4,
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "7WD",
      location: "California,USA",
      image: img4,
    },
    {
      id: 5,
      price: "$500000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "7WD",
      location: "California,USA",
      image: img5,
    },
    {
      id: 6,
      price: "$600000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "7WD",
      location: "California,USA",
      image: img6,
    },
    {
      id: 7,
      price: "$700000",
      name: "mitsubishi delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: img7,
    },
    {
      id: 8,
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "7WD",
      location: "California,USA",
      image: img8,
    },
  ]	
  return (
    <div className="container m-auto">
      <section>
        <HeroBanner1 />
      </section>
      <section>
        <Cardimg />
      </section>
      <section className="w-full flex justify-center mt-28">
        <div>
        <div className="flex flex-wrap justify-between items-center pb-10">
        <h1 className="font-semibold text-5xl font-[poppins] lg:pb-7">
            Latest Elyx Auction For You
          </h1>
          <div className="tabs flex gap-2">
            <button className="transition-all duration-200 bg-gray-200 hover:text-white hover:bg-blue-700  font-medium px-2 py-4 rounded">
              ACTIVE BIDS
            </button>
            <button className="transition-all duration-200 bg-gray-200 hover:text-white hover:bg-blue-700  font-medium px-2 py-2 rounded">
              COMMING SOON
            </button>
            <button className="transition-all duration-200 bg-gray-200 hover:text-white hover:bg-blue-700  font-medium px-2 py-2 rounded">
              COMPLETED
            </button>
          </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            {products.map((detail=>{
              return(
              <Products
              price={detail.price}
              name={detail.name}
              model={detail.model}
              engine={detail.engine}
              location={detail.location}
              image={detail.image}
              />
              )
            }))}
          </div>
        </div>
      </section>
      <section>
        <Cta />
      </section>
      <section className="bg-[#F8F8FF] p-[50px] w-full">
        <div className="flex flex-wrap justify-center gap-7">
          <Reviews />
        </div>
      </section>
    </div>
  );
}

export default About;
