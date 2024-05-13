import React from "react";
import FilterDiv from "./FilterDiv";
import { PiPoliceCar, PiComputerTower} from "react-icons/pi";
import { RiEBikeLine} from "react-icons/ri";
import { FiWatch} from "react-icons/fi";
import { AiOutlineDotChart} from "react-icons/ai";
import { MdOutlineSportsBaseball, MdOutlineLiquor, MdOutlineProductionQuantityLimits} from "react-icons/md";
import { LiaIndustrySolid} from "react-icons/lia";



export default function FilterSection() {
  return (
    <section className="w-full flex justify-around items-center" >
        <div className="container flex flex-wrap">
          <FilterDiv Icon={<PiPoliceCar/>} value={"Car"} />
          <FilterDiv Icon={<RiEBikeLine/>} value={"Bikes"} />
          <FilterDiv Icon={<FiWatch/>} value={"Watches"} />
          <FilterDiv Icon={<AiOutlineDotChart/>} value={"Art"} />
          <FilterDiv Icon={<MdOutlineSportsBaseball/>} value={"Sport"} />
          <FilterDiv Icon={<MdOutlineLiquor/>} value={"Liquor"} />
          <FilterDiv Icon={<LiaIndustrySolid/>} value={"Industry"} />
          <FilterDiv Icon={<PiComputerTower/>} value={"Electronic"} />
          <FilterDiv Icon={<MdOutlineProductionQuantityLimits/>} value={"All Products"} />

        </div>

    </section>
  );
}
