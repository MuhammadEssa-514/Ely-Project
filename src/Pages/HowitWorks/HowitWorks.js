import React from "react";
import HowItsWorkBanner from "../../Component/HowItsWorkBanner/HowItsWorkBanner";
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import HowItsWorkContent from "../../Component/HowItsWorkContent/HowitsWorkContent";
import { PopularItems } from "../../Component";
// import Footer from "../../Component/Footer/Footer";


export default function HowitWorks() {
  return (
    <div>
      <Breadcumb />
      <HowItsWorkBanner />
      <HowItsWorkContent/>
      <PopularItems/>

      <section>
      <div>
        {/* <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" /> */}
      </div>
      </section>

    </div>
  );
}
