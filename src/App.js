import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import NavBar from "./Component/Header/Header.jsx";
import SubmitForAuction from "./Pages/SubmitForAuction/SubmitForAuction.js";
import HowitWorks from "./Pages/HowitWorks/HowitWorks.js";
import GetinEmail from "./Pages/GetinEmail/GetinEmail.js";
import HomePageV2 from "./Pages/HomePageV2/HomePageV2.js";
import ActionListing from "./Pages/ActionListing/ActionListing.js";
import ActionDetails from "./Pages/ActionDetails/ActionDetails.js";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
          <Route index element={<Home />} />
          <Route  path="about"  element={<About />} />
          <Route  path="SubmitForAuction"  element={<SubmitForAuction />} />
          <Route  path="HowitWorks"  element={<HowitWorks />} />
          <Route  path="GetinEmail"  element={<GetinEmail />} />
          <Route  path="HomePageV2"  element={<HomePageV2 />} />
          <Route  path="ActionListing"  element={<ActionListing />} />
          <Route  path="ActionDetails"  element={<ActionDetails />} />
          
      </Routes>
      </>
  );
}
export default App;