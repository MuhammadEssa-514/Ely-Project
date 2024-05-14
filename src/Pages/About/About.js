import React from "react";
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import AboutBanner from '../../Component/AboutBanner/AboutBanner';
import AboutContent from "../../Component/AboutContent/AboutContent";
import Reviews from '../../Component/Reviews/Reviews'
// import Footer from "../../Component/Footer/Footer";




function About() {
  return (
   <div>
      <Breadcumb/>
      <AboutBanner/>
      <AboutContent/>
      <section className="bg-gray-100 p-[50px]">
        <div className="  flex flex-wrap justify-center gap-7">
          <Reviews />
        </div>
      </section>

      <section>
      <div>
        {/* <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" /> */}
      </div>
      </section>
      
     


     
   </div>
  );
}

export default About;
