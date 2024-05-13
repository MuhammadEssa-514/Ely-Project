import React from "react";
import { RiLoginCircleLine } from "react-icons/ri";

function HowItsWorkContent() {
  return (
    <div className="flex container">
      {/* first  */}
      <div className=" first-div  w-[25%] h-[50vh] ">
       
    <div className='w-[368px] text-[22px] font-mediam leading-[60px]'>
        <p><a href="" className='hover:text-[blue]'>HOW IT WORKS</a></p>
        <p><a href="#Buying" className='hover:text-[blue]'>Buying a Prodect</a></p>
        <p><a href="#Selling" className='hover:text-[blue]'>Selling a Prodect</a></p>
        <p><a href="#Finalizing" className='hover:text-[blue]'>Finalizing the Sale</a></p>
         
    </div>
      </div>
      {/* second */}
      <div className=" p-5 tracking-wider w-[1195px]">
        {/* section 1 */}
        <div className="w-[1072px] pb-10 ">
          <h1 className="text-7xl font-bold pb-5 ">How It Works</h1>

          <div id="Buying" className="flex gap-2 text-5xl text-Asif">
            <RiLoginCircleLine className="mt-1" />
            <h1 className="font-bold pb-5 text-primary">Buying a products</h1>
          </div>
          <p className="text-[#9A9A9A] text-lg  ">
            Once you’ve found a Products you’re interested in, here are the
            steps you should take to bid confidently and, with any luck, win the
            auction!
          </p>
          <div className="text-[#9A9A9A] text-lg">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              01. Register to Bid
            </h1>
            <p className="">
              To contact the seller directly and place bids, you must first{" "}
              <u className="text-blue-700">Register to bid</u> with a valid
              credit card and phone number. Winning bidders pay Cars & Bids a
              4.5% buyer’s fee on top of the winning bid amount (minimum of
              $225, maximum of $4,500).
            </p>
          </div>

          <div className="text-[#9A9A9A] text-lg ">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              02. Perform Due Diligence
            </h1>
            <p className="w-">
              While we’ve tried to make buying a car online as safe and easy as
              possible, it’s ultimately your responsibility to perform your own
              due diligence and make sure that the car you’re considering is
              right for you – prior to placing a bid.
            </p>
            <ul className="list-disc text-[blue] pl-14 w-[1070px] tracking-wider">
              <li className="text-[blue] ">
                <p className="text-black">
                  Review the listing thoroughly, including known flaws, the
                  vehicle history report, recent maintenance, photos, etc.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Ask the seller – via comments, Seller Q&A, or the “Contact”
                  feature – any questions that you may have about the vehicle.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Arrange to inspect the vehicle in person, or work with the
                  seller to schedule a pre-purchase inspection (“PPI”) at a
                  reputable shop in their area (at your cost).
                </p>
              </li>
            </ul>
          </div>

          <div className="text-[#9A9A9A] text-lg">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              03. Arrange Financing and Logistics
            </h1>
            <p>
              To ensure a smooth transaction, you should have the following
              organized prior to placing a bid.
            </p>

            <ul className="list-disc text-[blue] pl-14 w-[1070px] ">
              <li className="text-[blue] ">
                <p className="text-black">
                  If you plan to finance this purchase, work with your lender to
                  get your financing approved for this specific vehicle ahead of
                  time; if you need a lender, we recommend working with your
                  local credit union.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Discuss transportation and storage timelines (if applicable)
                  with the seller, and if you’ll be shipping the vehicle, get a
                  shipping quote in advance – we recommend uShip and{" "}
                  <u className="text-[blue]">EasyAutoShip </u>for hassle-free
                  quotes.
                </p>
              </li>
            </ul>
          </div>
          <div className="text-[#9A9A9A] text-lg ">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">04. Bid</h1>
            <p>We’ve made bidding easy, by just one click.</p>
            <ul className="list-disc text-[blue] pl-14 w-[1070px] tracking-wider">
              <li className="text-[blue] ">
                <p className="text-black">
                  When you bid, we place a hold on your credit card for the
                  buyer's fee – if you win, your card will be charged and you
                  will pay the seller directly for the vehicle, otherwise, the
                  hold will be released at the auction’s end.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Bids are binding, so only bid if you fully intend to purchase
                  the car and you have performed the requisite due diligence,
                  because you might end up as the high bidder and there are no
                  refunds.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  To ensure the bidding process is fair for everyone, bids
                  placed within the final minute of the auction will reset the
                  auction’s time remaining back to 1 minute – giving others the
                  opportunity to bid.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* section 2 */}
        <div className="w-[1072px] ">
          <div id="Selling" className="flex gap-2 text-5xl text-Asif">
            <RiLoginCircleLine className="mt-1" />
            <h1 className="font-bold pb-5 text-primary">selling a products</h1>
          </div>
          <p className="text-[#9A9A9A] text-lg  ">
            ElyX is the best place to sell your modern enthusiast car – and
            we’ve made the process easy. We’ve explained it all in a short video
            tutorial:
          </p>
          <div className="text-[#9A9A9A] text-lg">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              01. Submit Your Car
            </h1>
            <p>
              It’s free to <u className="text-[blue]">submit your Product</u>.
              We simply ask you for a few details – including the VIN, some
              photos, and a brief description of the Products. You can also
              choose whether you want to set a reserve price, or if you want
              your vehicle to be sold with no reserve. A reserve price is a
              minimum value you’ll accept in order to sell your car – and while
              a reserve auction may seem like an appealing choice, we’ve found
              that vehicles offered with no reserve get more bids, more
              interest, and more attention.
            </p>

            <p className="pb-5 pt-5">
              If you choose a reserve auction, we’ll ask you to suggest a
              reserve price – but, based on market conditions, we may ask for a
              lower one before accepting your car. Keep in mind that all of our
              auctions start from $0, regardless of whether or not they have a
              reserve.
            </p>

            <p>
              Our experienced auction team will review your submission and may
              ask you some follow-up questions. We will do our best to give you
              an answer within a business day. Not every car is right for Cars &
              Bids, but we always appreciate you taking the time to submit your
              car to us!
            </p>
          </div>

          <div className="text-[#9A9A9A] text-lg ">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              02. Prepare Your Listing
            </h1>
            <p className="w-">
              Once your submission is accepted, we’ll need some additional
              information from you – like detailed photos, service and ownership
              history, etc. Don’t worry – we’re here to help you throughout the
              process!
            </p>

            <ul className="list-disc text-[blue] pl-14 w-[1070px] tracking-wider">
              <li className="text-[blue] ">
                <p className="text-black">
                  Before you can sell on Cars & Bids, your car must not be
                  listed for sale elsewhere – meaning you’ll have to remove any
                  other advertisement for your car and you cannot accept offers
                  outside of the auction.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Take excellent photos of your car to get top dollar –{" "}
                  <u className="text-[blue]">
                    {" "}
                    hire a professional photographer
                  </u>{" "}
                  or <u className="text-[blue] Review our photo Guide"></u>{" "}
                  before snapping your own pics.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Filming a quick video{" "}
                  <u className="text-[blue]">Walk-Around And Cold-Start</u> are
                  strongly recommended – just shoot them on your phone in
                  landscape mode and upload to YouTube or Vimeo
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Review the process for transferring vehicle titles in your
                  state – and, if you have a loan on the vehicle, review the
                  process and timeline for paying it off with your lender.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Finally, before we can begin writing your listing, you’ll pay
                  Cars & Bids a non-refundable listing fee – it’s $89 for
                  first-time sellers with a reserve, and $49 for everyone else
                </p>
              </li>
            </ul>
          </div>

          <div className="text-[#9A9A9A] text-lg">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              03. Finalize Your Auction
            </h1>
            <p>
              Once you’ve paid and provided us with all of the necessary
              information and photos, we’ll create a draft of your listing for
              you to approve. Once you’ve reviewed and approved it, we’ll work
              with you to schedule your auction, and it will go live shortly
              thereafter!
            </p>
          </div>
          <div className="text-[#9A9A9A] text-lg ">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
              04. Participate in the Auction
            </h1>
            <ul className="list-disc text-[blue] pl-14 w-[1070px] tracking-wider">
              <li className="text-[blue] ">
                <p className="text-black">
                  Timely and positive seller participation in the auction –
                  responding to comments and questions, providing additional
                  pictures or videos as needed, etc – is crucial to a successful
                  auction. Good seller participation will result in additional
                  interest, more bids, and a higher final sale price.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Interested bidders may contact you directly via email using
                  the “Contact Seller” feature, allowing them to schedule test
                  drives, pre-purchase inspections (at their cost), and ask
                  additional questions.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  Enjoy the final minutes – many of our auctions end with
                  thrilling bidding wars, so get ready!
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">05. Auction End</h1>
            <p className="text-[#9A9A9A] text-lg">
              Once your auction ends, you’ll be given the buyer’s contact
              information and vice-versa, in order to finalize the details and
              logistics of the transaction. <u className="text-[blue]"> Learn more about Finalizing the
              Sale.</u>
              <br />
              <br />
              If your auction had a reserve and it was not met, we’ll reach out
              to you and the highest bidder to see if we can help make a deal!
            </p>
          </div>
        </div>
        <div id="Finalizing" className="w-[1072px]  pt-10">
          <div className="flex gap-2 text-5xl text-[blue]">
            <RiLoginCircleLine className="mt-1" />
            <h1 className="font-bold pb-5 text-primary">Finalizing the Sale</h1>
          </div>
          <p className="text-[#9A9A9A] text-lg  ">
          Once a car is sold on Cars & Bids, we connect the buyer and seller so they can complete the vehicle sale directly. Here are our recommendations and tips for ensuring a successful post-auction transaction – and remember, we’re here to help!
          </p>
          <div className="text-[#9A9A9A] text-lg">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
            01. Make Contact</h1>
            <ul className="list-disc text-[blue] pl-14 w-[1070px] tracking-wider">
              <li className="text-[blue] ">
                <p className="text-black">
                Reach out to the other party to introduce yourself as soon as the auction ends, and remember to stay polite and positive to ensure the process goes smoothly.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                We recommend that the seller provides proof of ownership to the buyer – usually, that’s a photocopy or picture of the title and registration.
                </p>
              </li>
              </ul>

          </div>

          <div className="text-[#9A9A9A] text-lg ">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
            02. Payment & Documentation            
            </h1>
            <ul className="list-disc text-[blue] pl-14 w-[1070px] tracking-wider">
              <li className="text-[blue] ">
                <p className="text-black">
                Buyers are expected to pay for the vehicle in-full within a week of the auction closing.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                If there’s an outstanding loan on the vehicle, the buyer and seller should discuss how it will be paid off and the specific next steps, so that the buyer can complete the transaction safely.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                  An accurate Bill of Sale should be created, including the terms of the transaction, to be signed by both parties; we recommend checking with your state DMV for Bill of Sale templates and requirements.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                We recommend wire transfers or cashier’s checks for payment, but there are many possible options – including meeting at the buyer’s/seller’s bank to draft up a cashier's check, withdrawing the funds directly, or completing an electronic money transfer.
                </p>
              </li>
              <li className="text-[blue] ">
                <p className="text-black">
                Arrange for the car to be picked up and finalize the transaction. The vehicle and title should only be released once the seller has the full payment in hand. If the transaction is happening remotely, the seller should mail the signed-over title to the buyer via courier service with a tracking number once payment is in hand.
                </p>
              </li>
             
            </ul>
          </div>

          <div className="text-[#9A9A9A] text-lg">
            <h1 className="text-black text-3xl font-bold pb-5 pt-5">
            03. Share your Success Story</h1>
            <p>
            <u className="text-[blue]">Email The Cars & Bids team</u>A photo of the handoff to share your success story – we’d love to hear about it!
            </p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default HowItsWorkContent;
