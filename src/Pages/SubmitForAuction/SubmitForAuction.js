import React from "react";
import PlanMain from "../../Component/Plan/PlanMain";
import PlaneProcess from "../../Component/PlanProcess/PlaneProcess";
import { PopularItems } from "../../Component";
// import Footer from "../../Component/Footer/Footer";
import PlanPricing from "../../Component/PlanPricing/PlanPricing";

export default function SubmitForAuction() {
  return (
    <div>
      <PlanMain />
      <div className="container text-center mb-10">
        <h1 className="text-[55px] font-bold mt-5">Your auction is just one click away</h1>
        <p className="text-[21px] mb-20 text-gray-400 font-normal">
          Our Application Process Is Free And Only Take 5 Minutes
        </p>
        <div>
        <PlanPricing />
        </div>
      </div>
      <PlaneProcess />
      <PopularItems />
      <section>
        <div>
          {/* <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" /> */}
        </div>
      </section>
    </div>
  );
}
