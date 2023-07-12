import { useState } from "react";
import logo from "../../images/Logo.png";
import Button from "../Button/Button";
// import { Outlet, Link } from "react-router-dom";
import { Links } from "./Links";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const link = [
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Submit For Auction",link:"/SubmitForAuction"},
    {name:"How it Works",link:"/HowitWorks"},
    {name:"Get in Email",link:"/GetinEmail"},
  ];
  return (
    <nav className="container">
      <div className="justify-between items-center flex-wrap px-4 mx-auto  Nav:items-center Nav:flex Nav:px-8">
        <div>
          <div className="flex flex-wrap items-center justify-between py-3 Nav:py-5 Nav:full">
            <a href="javascript:void(0)">
              <img
                src={logo}
                alt="...."
                className="w-[177.5px] j-[60px]"
              />
            </a>
            <div className="Nav:hidden ">
              <button
                className="p-2 text-white bg-blue-700 rounded-md outline-none focus:border-white focus:border mr-3"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="justify-between items-center">
          <div
            className={`${
              navbar ? "block" : "hidden"
            } md:flex-1 justify-self-center pb-3 mt-8 Nav:block Nav:pb-0 Nav:mt-0`}
          >
            <ul className="items-center justify-center space-y-8 Nav:flex Nav:space-x-6 Nav:space-y-0">
              {link.map((item,index) => (
                <Links link={item.link} title={item.name} className={"block"} key={index} />
              ))}
              <Button
              label="Login / Signup"
              height={"h-[60px]"}
              width={"w-[196px]"}
              variants="primary"
            />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}