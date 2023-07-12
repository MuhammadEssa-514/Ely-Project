import React from "react";
import Redcar from "../../images/redcar.png"
import Details from "../Details/Details";

const CardData = [
  {
    id: 1,
    price: "$240,000",
    name: "1964 Chevrolet Corvette Convertible",
    model: "$9600",
    engine: "7WD",
  },
  {
    id: 1,
    price: "$240,000",
    name: "1964 Chevrolet Corvette Convertible",
    model: "$9600",
    engine: "7WD",
  },
  {
    id: 1,
    price: "$240,000",
    name: "1964 Chevrolet Corvette Convertible",
    model: "$9600",
    engine: "7WD",
  },
  {
    id: 1,
    price: "$240,000",
    name: "1964 Chevrolet Corvette Convertible",
    model: "$9600",
    engine: "7WD",
  },
  {
    id: 1,
    price: "$240,000",
    name: "1964 Chevrolet Corvette Convertible",
    model: "$9600",
    engine: "7WD",
  },
  {
    id: 1,
    price: "$240,000",
    name: "1964 Chevrolet Corvette Convertible",
    model: "$9600",
    engine: "7WD",
  },
];

function Cardimg() {
  return (
    <div className="App">
      <section>
        <div className="container mx-auto py-6 flex flex-wrap  w-[100%] justify-between">
          <div className="text-2xl">
            <h1>
              Your Recommendations{" "}
              <span className="text-[#0C50CA] text-sm">
                (503 Auction Lives)
              </span>{" "}
            </h1>
          </div>
          <div className="flex gap-10 mr-8">
            <a href="https://example.com">
              <h2 className="hover:border-b-2 hover:border-[#0C50CA] pb-4 hover:text-[#0C50CA]">
                LATEST BIDS
              </h2>
            </a>
            <a href="https://example.com">
              <h2 className="hover:border-b-2 hover:border-[#0C50CA] pb-4 hover:text-[#0C50CA]">
                NEWEST BIDS
              </h2>
            </a>
          </div>
        </div>

        <div className="  flex flex-col jusitify-center items-center w-full lg:flex-row  ">
          <div className="w-full md:w-[40%] ">
            <img src={Redcar} className="w-full h-auto" alt="Redcar" />
          </div>
          <div className=" flex flex-col gap-2 w-full lg:w-[60%] m-4">
            {CardData.map((y) => {
              return (
                <Details
                  key={y.id}
                  price={y.price}
                  name={y.name}
                  model={y.model}
                  engine={y.engine}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cardimg;
