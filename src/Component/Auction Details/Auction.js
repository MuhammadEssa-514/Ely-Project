import React, { useState, useEffect } from "react";
import {
  Autionbg,
  Aution1,
  Aution2,
  Aution3,
  Aution4,
  Aution5,
  user,
  hammer,
  img13a,
  img14a,
  img15a,
  img16a,
  img17a,
} from "../../images/index.js";
import { BsClock, BsArrowUp, BsHash, BsQuestionCircle } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { GrFavorite, GrFlag } from "react-icons/gr";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { PiArrowElbowDownRightLight } from "react-icons/pi";

function Aution() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      return () => {
        clearInterval(t);
      };
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const openCard = (imageIndex) => {
    switch (imageIndex) {
      case 1:
        setSelectedImage(Aution1);
        break;
      case 2:
        setSelectedImage(Aution2);
        break;
      case 3:
        setSelectedImage(Aution3);
        break;
      case 4:
        setSelectedImage(Aution4);
        break;
      case 5:
        setSelectedImage(Aution5);
        break;
      default:
        setSelectedImage(null);
        break;
    }
  };

  return (
    <div className="mt-10 gap-3">
      <div>
        <div className="flex  justify-between ">
          <h1 className="text-2xl font-bold">2007 Toyota FJ Cruiser</h1>
          <div className="flex  text-3xl gap-10 ">
            <h1 className="flex gap-5">
              {" "}
              <RiShareForwardLine /> Share
            </h1>

            <h1 className="flex gap-5 ">
              <GrFavorite /> Favorite
            </h1>
          </div>
        </div>

        <div className="flex mt-3 mb-8  ">
          <button className="bg-orange-600 p-3 text-white font-bold rounded-[10px]">
            NO RESERVE
          </button>
          <div className="ml-2">
            <p className="mt-3">
              <span className="font-bold">2 owners</span>, 6-Speed Manual,
              Numerous Modifications, 4WDs
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 2xl:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1s pb-10">
        <div className=" w-[98%]  ">
          <div>
            <div className="w-full bg-cover">
              <img src={selectedImage || Autionbg} alt="" className="w-full" />
            </div>
            <div className="grid grid-cols-5 mt-2 gap-2 bg-cover  ">
              <img
                src={Aution1}
                alt=""
                // className="w-[20%]"
                onClick={() => openCard(1)}
              />
              <img
                src={Aution2}
                alt=""
                // className="w-[20%]"
                onClick={() => openCard(2)}
              />
              <img
                src={Aution3}
                alt=""
                // className="w-[20%]"
                onClick={() => openCard(3)}
              />
              <img
                src={Aution4}
                alt=""
                // className="w-[20%]"
                onClick={() => openCard(4)}
              />
              <img
                src={Aution5}
                alt=""
                // className="w-[20%]"
                onClick={() => openCard(5)}
              />
            </div>
          </div>

          <div className=" grid grid-cols-4 leading-10">
            <div className="bg-[#F8F8FF] ">
              <h1>Make</h1>
              <h1>Model</h1>
              <h1>Seller</h1>
              <h1>Location</h1>
              <h1>VIN</h1>
              <h1>Mileage</h1>
              <h1>Body Style</h1>
            </div>
            <div className="">
              <h1>Toyota</h1>
              <h1>FJ Cruiser</h1>
              <h1>ejserna</h1>
              <h1>Chicago, IL 60639</h1>
              <h1>JTEBU11FX70099874</h1>
              <h1>88,800</h1>
              <h1>SUV/Crossover</h1>
            </div>
            <div className="bg-[#F8F8FF]  ">
              <h1>Engine</h1>
              <h1>Drivetrain</h1>
              <h1>Transmission</h1>
              <h1>Exterior Color</h1>
              <h1>Interior Color</h1>
              <h1>Title Status</h1>
              <h1>Seller Type</h1>
            </div>
            <div>
              <h1>4.0L V6</h1>
              <h1>4WD/AWD</h1>
              <h1>Manual (6-Speed)</h1>
              <h1>Black</h1>
              <h1>Black</h1>
              <h1>Clean (IL)</h1>
              <h1>Private Party</h1>
            </div>
          </div>
          <p>
            This 1968 Maserati Ghibli is #25 of approximately 425 SS coupes
            produced between 1969 and 1973 and was delivered new to Rolma
            Automobili S.r.l. of Milano, Italy. It was acquired out of Japan in
            early 2020 and subsequently imported to the US by the selling
            dealer, who commissioned a cosmetic refurbishment that included a
            bare-metal repaint in the factory shade of Verde Gemma and a
            reupholstered interior in Senape tan leather.
          </p>
          <h1 className="text-[#0C50CA] text-[24px] font-bold ">Highlights</h1>
          <p>
            THIS... is a 2007 Toyota FJ Cruiser, finished in black with a black
            interior.
          </p>
          <ul className="list-disc text-[blue] p-10">
            <li className="list-outside ">
              <p className="text-black">
                This FJ Cruiser comes in a desirable configuration with
                four-wheel drive and a 6-speed manual transmission.
              </p>
            </li>
            <li className="list-outside">
              <p className="text-black">
               
                The attached Carfax vehicle history report shows no accidents or
                damage in this FJ Cruiser's past.
              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
               
                Numerous modifications have been made to this FJ and highlights
                include Raptor exterior coating, a TRD snorkel, a custom audio
                system, and more as detailed below.
              </p>
            </li>
          </ul>

          <hr className=" h-1" />
          <div className="pb-10">
            <h1 className="text-[blue] font-bold text-lg">Modifications</h1>
            <ul className="list-disc text-[blue] pl-10">
            <li className="list-outside ">
              <p className="text-black">
              Raptor Liner exterior coating
              </p>
            </li>
            <li className="list-outside">
              <p className="text-black">
               
              Wheels painted black
              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
               
              LED exterior and interior lighting
              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
               
              Alpine double din head unit with Android Auto and Apple CarPlay              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
              Bluetooth connectivity</p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
              Backup camera
              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
              2 Alpine amplifiers
              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
              JL Audio Stealth Box (12-inch)
              </p>
            </li>
          </ul>
          </div>
          <hr className=" h-1" />
        <div className="pb-10 pt-5">
            <h1 className="text-[blue] font-bold text-lg">Recent Service History</h1>
            <p>The seller reports that the only service this FJ Cruiser has required during his ownership has been an A/C blower motor resistor; no service documentation is available.</p>
            </div>
            <hr className=" h-1" />

            <div className="pt-5">
              <h1 className="text-[blue] font-bold text-lg">Bid on this listing</h1>
              <div className="flex gap-5 p-2">
                <div className="bg-[#f6f6fa] w-[10%] ">
                <p>Current Bid</p>
                <p>Time Left</p>
                <p>Ends On</p>
                <p>Bids</p>
                </div>
                <div>
                <p>USD $95,000 by <span className="text-[#0C50CA]"> TBCars</span> </p>
                <p>23 : 34 : 57 : 07</p>
                <p>	Friday, September 3 at 11:30pm</p>
                <p>20</p>
                </div>
              </div>
            </div>
        </div>
        {/* second div */}
        <div className="w-[99%] pb-10  ">
          <div className="">
            <div className=" flex bg-black  text-white justify-between items-center rounded pl-2  text-sm ">
              <div className="flex gap-1">
                <BsClock className="mt-1 text-[#0C50CA]" />
                {currentTime}
              </div>

              <div className="flex gap-1 ">
                <BsArrowUp className="text-[#0C50CA] mt-1 " />
                <h1 className="text-[#0C50CA]">High Bid</h1>
                <h1>$7,400</h1>
              </div>
              <div className="flex gap-1">
                <BsHash className="text-[#0C50CA] mt-1" />
                <h1 className="text-[#0C50CA]">Bid</h1>
                <h1>16</h1>
              </div>
              <div className="flex gap-1">
                <FaRegCommentDots className="text-[#0C50CA] mt-1" />
                <h1 className="text-[#0C50CA] ">Comments</h1>
                <h1>06</h1>
              </div>
              <div className="bg-[#0C50CA] p-4 rounded-r-md">
                <button>PLACE BID</button>
              </div>
            </div>

            <div className="mt-3 mb-5">
              <div className="flex gap-[30%] border[#CCD9E0] border-l border-t border-r rounded-r-md p-5 ">
                <div className="mt-4 pb-5  w-[30%]">
                  <p>CURRENT BID</p>
                  <h1 className="font-bold text-2xl">$9,056</h1>
                </div>
                <div className=" leading-7 mt-2 flex flex-wrap">
                  <div className="flex gap-1 items-center">
                    <img src={user} alt="" />
                    <pre>Bidder : Alex Jonhson</pre>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <img src={user} alt="" />
                    <pre>
                      Seller : Sandy Joseph{" "}
                      <span className="text-[blue] underline">contact</span>
                    </pre>
                  </div>

                  <div className="flex gap-1 items-center">
                    <img src={hammer} alt="" />
                    <pre>Bidder : Alex Jonhson</pre>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF]">
                <div className="flex p-4 gap-[15%] text-2xl ">
                  <div className="flex ml-1 gap-1 ">
                    <BsQuestionCircle className="mt-1" />
                    <p>How to place a bid?</p>
                  </div>
                  <div className="flex gap-1">
                    <BsQuestionCircle className="mt-1" />
                    <p>How to place a Comments?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-6">
            <div>
              <h1>comments</h1>
            </div>
            <div>
              <ul className="flex gap-8">
                <li>Newest</li>
                <li>uploaded</li>
                <li>salller Comments</li>
                <li>Bids history</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex border p-2 rounded-md mt-3  ">
            <input
              type="text "
              className="w-[100%]  border-none rounded-md outline-none"
              name="gsearch "
              placeholder="Add to comments and Bids "
            />
            <div className=" w-10 h-15 items-center  rounded  ">
              <AiOutlineComment className="text-4xl   bg-blue-700 rounded-md text-white" />
            </div>
          </div>

          <div className="leading-7 ">
            <div className="flex gap-2 mt-3 ">
              <img src={img13a} alt="" />
              <h1 className="mt-2">Mishal</h1>
              <BsArrowUp className="mt-3 text-[#0C50CA] " />
              <p className="text-[#0C50CA] mt-2">3.2k</p>
              <p className="mt-2 opacity-70">5 Hours ago</p>
            </div>
            <p className="ml-12">
              Like the Alfa 75, this Spider was not that rare in Europe. But
              nowadays, it is! Whatever, an absolute unicorn for any American
              driver, that's for sure. ^^
            </p>

            <div className=" flex mt-1 ml-12 gap-10">
              <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                <BsArrowUp className="mt-1" />
                <p>20</p>
              </button>

              <div className="flex gap-1 mt-1 ">
                <PiArrowElbowDownRightLight className="mt-1" />
                <p>Reply</p>
                <p></p>
              </div>
              <div className="gap-1 flex mt-1">
                <GrFlag className="mt-1" />
                <p>Flage as inappropriate</p>
              </div>
            </div>
          
          <div>
            <div className="flex gap-2 mt-3">
              <img src={img14a} alt="" />
              <h1 className="mt-2">Sandhya</h1>
              <BsArrowUp className="mt-3 text-[#0C50CA] " />
              <p className="text-[#0C50CA] mt-2">3.2k</p>
              <p className="mt-2 opacity-70">5 Hours ago</p>
            </div>
            <p className="ml-12">
              Wow this is awesome. I must have watched that wheeler dealers
              episode 10 times. As a proud owner of a red quadrifoglio myself I
              must say it’s nice seeing these increase in value. I bought mine
              on a competitor auction site for a lot less than the current bid
              price. Make sure you drive it don’t just let it sit, that’s the
              worse thing you can do. <br />
              <br />
               Alfa’s are a lot like Italian women, with
              the passion you get the temperament so if you don’t give it
              attention be prepared to deal with some problems. :-)
            </p>

            <div className=" flex mt-1 ml-12 gap-10">
              <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                <BsArrowUp className="mt-1" />
                <p>20</p>
              </button>

              <div className="flex gap-1 mt-1 ">
                <PiArrowElbowDownRightLight className="mt-1" />
                <p>Reply</p>
                <p></p>
              </div>
              <div className="gap-1 flex mt-1">
                <GrFlag className="mt-1" />
                <p>Flage as inappropriate</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mt-3">
                <img src={img15a} alt="" />
                <h1 className="mt-2">Mattteuz</h1>
                <BsArrowUp className="mt-3 text-[#0C50CA] " />
                <p className="text-[#0C50CA] mt-2">4</p>
                <p className="mt-2 opacity-70">3 Day ago</p>
              </div>
              <div className=" flex mt-1 ml-8 gap-2">
              <button className="bg-[#353535] text-white w-[15%] rounded-full">Bid $9,056</button>
                <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                  <BsArrowUp className="mt-1" />
                  <p>20</p>
                </button>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mt-3">
                <img src={img16a} alt="" />
                <h1 className="mt-2">Markindallas</h1>
                <BsArrowUp className="mt-3 text-[#0C50CA] " />
                <p className="text-[#0C50CA] mt-2">4</p>
                <p className="mt-2 opacity-70">3 Days ago</p>
              </div>

              <div className=" flex mt-1 ml-8 gap-2">
              <button className="bg-[#353535] text-white w-[15%] rounded-full">Bid $8,700</button>
                <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                  <BsArrowUp className="mt-1" />
                  <p>20</p>
                </button>
              </div>
            </div>

            <div>
              <div className="flex gap-2 mt-3">
                <img src={img17a} alt="" />
                <h1 className="mt-2">Lavaman</h1>
                <BsArrowUp className="mt-3 text-[#0C50CA] " />
                <p className="text-[#0C50CA] mt-2">4</p>
                <p className="mt-2 opacity-70">3 Day ago</p>
              </div>
              <p className="ml-12">Like the Alfa 75,</p>
              <div className=" flex mt-1 ml-8 gap-2">
              <button className="bg-[#353535] text-white w-[15%] rounded-full">Bid $8,100</button>
                <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                  <BsArrowUp className="mt-1" />
                  <p>20</p>
                </button>
              </div>

              
              </div>

            <div>
              <div className="flex gap-2 mt-3">
                <img src={img17a} alt="" />
                <h1 className="mt-2">LamBROGhiniz</h1>
                <BsArrowUp className="mt-3 text-[#0C50CA] " />
                <p className="text-[#0C50CA] mt-2">3.2k</p>
                <p className="mt-2 opacity-70">5 hour ago</p>
              </div>
              <p className="ml-12">I can't wait to see what this goes for. Desirable classic + No Reserve = interesting auction.</p>
              <div className=" flex mt-1 ml-12 gap-10">
              <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                <BsArrowUp className="mt-1" />
                <p>20</p>
              </button>

              <div className="flex gap-1 mt-1 ">
                <PiArrowElbowDownRightLight className="mt-1" />
                <p>Reply</p>
                <p></p>
              </div>
              <div className="gap-1 flex mt-1">
                <GrFlag className="mt-1" />
                <p>Flage as inappropriate</p>
              </div>
            </div>
              </div>

            <div className="ml-14">
              <div className="flex gap-2 mt-3">
                <img src={img15a} alt="" />
                <h1 className="mt-2">LamBROGhiniz</h1>
                <BsArrowUp className="mt-3 text-[#0C50CA] " />
                <p className="text-[#0C50CA] mt-2">3.2k</p>
                <button className="bg-[#EA5F00] p-1 rounded text-white">SELLER</button>
                <p className="mt-2 opacity-70">5 hour ago</p>
              </div>
              <p className="ml-12">I can't wait to see what this goes for. Desirable classic + No Reserve = interesting auction.</p>
              <div className=" flex mt-1 ml-12 gap-10">
              <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                <BsArrowUp className="mt-1" />
                <p>20</p>
              </button>

              <div className="flex gap-1 mt-1 ">
                <PiArrowElbowDownRightLight className="mt-1" />
                <p>Reply</p>
                <p></p>
              </div>
              <div className="gap-1 flex mt-1">
                <GrFlag className="mt-1" />
                <p>Flage as inappropriate</p>
              </div>
            </div>
              </div>
              <div className="ml-28">
                <div className="flex gap-2 mt-3">
                  <img src={img13a} alt="" />
                  <h1 className="mt-2">LamBROGhiniz</h1>
                  <BsArrowUp className="mt-3 text-[#0C50CA] " />
                  <p className="text-[#0C50CA] mt-2">3.2k</p>
                  <p className="mt-2 opacity-70">5 hour ago</p>
                </div>
                <p className="ml-12">I can't wait to see what this goes for. Desirable classic + No Reserve = interesting auction.</p>
                <div className=" flex mt-1 ml-12 gap-10">
                <button className="flex text-[#0C50CA] w-16 justify-center rounded-full border border-[#0C50CA] p-1">
                  <BsArrowUp className="mt-1" />
                  <p>20</p>
                </button>

                <div className="flex gap-1 mt-1 ">
                  <PiArrowElbowDownRightLight className="mt-1" />
                  <p>Reply</p>
                  <p></p>
                </div>
                <div className="gap-1 flex mt-1">
                  <GrFlag className="mt-1" />
                  <p>Flage as inappropriate</p>
                </div>
              </div>
              <button className="bg-blue-700 p-3 mt-7 ml-12 text-white rounded-md ">
                Post A Comments
              </button>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Aution;
