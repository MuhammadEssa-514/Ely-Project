import React from "react";
import {
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  // img1,
  // img2,
  // img3,
  // img4,
  // img5,
  // img6,
  // img7,
  // img8,
} from "../../images/index";
import { FilterSection } from "../../Component";
import Cardimg from "../../Component/Cardimg/Cardimg";
import AuctionCard from "../../Component/AuctionCard/AuctionCard";
import Carousel from "../../Component/Carousel/Carousel";
import Cta from "../../Component/Cta/Cta";
import PopularItems from "../../Component/PopularItems/PopularItems";
import Example from "../../Component/footer/footer";
import HeroSection from "../../Component/HeroSection/HeroSection";

export default function Home() {
  const AuctionData8 = [
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: car1,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: car2,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: car3,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: car4,
    },
    {
      price: "$5000000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "5WD",
      location: "California,USA",
      image: car5,
    },
    {
      price: "$6000000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "6WD",
      location: "California,USA",
      image: car6,
    },
    {
      price: "$7000000",
      name: "mitsubishii delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: car7,
    },
    {
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "8WD",
      location: "California,USA",
      image: car8,
    },
  ];
  const AuctionData4 = [
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: car6,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: car7,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: car8,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: car2,
    },
  ];
  return (
    <div className="container m-auto">
      <section>
        <FilterSection />
      </section>
      <section>
        <HeroSection />
      </section>
      <section>
        <div>
          <Cardimg />
        </div>
      </section>
      <section className="w-full flex justify-center mt-28">
        <div className="">
        
        <div className="flex flex-wrap justify-between">
        <h1 className="pb-5 font-semibold text-4xl font-[poppins]">
            Lattest Auctions
          </h1>
          <div className="tab flex gap-10">
           <a>
              <h2 className="transition-all duration-200 hover:border-b-2 hover:border-[#0C50CA] pb-4 hover:text-[#0C50CA] font-medium">
                ACTIVE
              </h2>
            </a>
            <a>
              <h2 className="transition-all duration-200 hover:border-b-2 hover:border-[#0C50CA] pb-4 hover:text-[#0C50CA] font-medium">
                COMMING SOON
              </h2>
            </a>
            <a>
              <h2 className="transition-all duration-200 hover:border-b-2 hover:border-[#0C50CA] pb-4 hover:text-[#0C50CA] font-medium">
                COMPLETED
              </h2>
            </a>
          </div>
          </div>
         
          <hr className=" pb-7" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            {AuctionData8.map((item) => {
              return (
                <AuctionCard
                  price={item.price}
                  name={item.name}
                  model={item.model}
                  engine={item.engine}
                  location={item.location}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className=" bg-[#F8F8FF]  ">
        <div className="text-center  ">
          <Carousel />
        </div>
      </section>
      <section>
        <div>
          <h1 className="pb-5 font-bold text-4xl">Closed To Me</h1>
          <hr className=" pb-7" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            {AuctionData4.map((item) => {
              return (
                <AuctionCard
                  price={item.price}
                  name={item.name}
                  model={item.model}
                  engine={item.engine}
                  location={item.location}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <Cta />
      </section>
      <section>
        <PopularItems />
      </section>
      <section>
        <div>
          <Example />
        </div>
      </section>
    </div>
  );
}
