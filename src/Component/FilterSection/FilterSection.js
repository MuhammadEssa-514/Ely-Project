import React from "react";
import FilterDiv from "./FilterDiv";
import Img1 from "../../images/1.ico";
import Img2 from "../../images/222.ico";
import Img3 from "../../images/3.ico";
import Img4 from "../../images/4.ico";
import Img5 from "../../images/5.ico";
import Img6 from "../../images/6.ico";
import Img7 from "../../images/7.ico";
import Img8 from "../../images/8.ico";
import Img9 from "../../images/9.ico";

export default function FilterSection() {
  return (
    <section className="w-full flex justify-around items-center" >
        <div className="container flex flex-wrap">
          <FilterDiv image={Img1} />
          <FilterDiv image={Img2} />
          <FilterDiv image={Img3} />
          <FilterDiv image={Img4} />
          <FilterDiv image={Img5} />
          <FilterDiv image={Img6} />
          <FilterDiv image={Img7} />
          <FilterDiv image={Img8} />
          <FilterDiv image={Img9} />
          <FilterDiv image={Img4} />

        </div>
    </section>
  );
}
