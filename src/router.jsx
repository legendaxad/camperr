import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homecomponent from "./components/homecompont/home";
import Motor from "./components/motor";
import Tuningcomponent from "./components/tuning";
import Usedcarcomponent from "./components/usedcar";
import Detailmotors from "./components/motors/detail";
import DetailVmotors from "./components/motors/vDetail";
import Detailtuning from "./components/tuning/detail";
import DetailVtuning from "./components/tuning/vDetail";
import Detailusedcar from "./components/usedcar/detail";
import DetailVusedcar from "./components/usedcar/vDetail";
import Detailcaravan from "./components/caravan /detail";
import DetailVcaravan from "./components/caravan /vDetail";
import Logincomponent from "./components/login/login";
import Singupcomponent from "./components/login/singup";
import Campingcomponent from "./components/camping/camping";
import Campingdetail from "./components/camping/campingdetail";
import Navbarcomponents from "./components/navbar";
import Footercomponents from "./components/footer";
import Notfound from "./components/login/notfound";
import Myordercomponent from "./components/order/myorder";
import Cartpagecomponent from "./components/cartt/cartpage";
import Comparepage from "./components/compare/comparepage";
import Caravanorder from "./components/order/caravanorder";
import Comparecaravan from "./components/compare/caravancom";
import Tuningorder from "./components/order/tuningorder";
import Tuningcompare from "./components/compare/tuningcom";
import Usedcarorder from "./components/order/usedcarorder";
import Usedcarcom from "./components/compare/usedcarcom";
import Caravancompon from "./components/caravan";

const Routercomponent = () => {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/" ||
    location.pathname === "/sing-up" ||
    location.pathname === "/*";

  return (
    <>
      <>
        {!hideNavbarFooter && <Navbarcomponents />}

        <Routes>
          <Route path="/homepage" element={<Homecomponent />} />
          <Route path="/motor" element={<Motor />} />
          <Route path="/caravan" element={<Caravancompon />} />
          <Route path="/tuning" element={<Tuningcomponent />} />
          <Route path="/usedcar" element={<Usedcarcomponent />} />
          <Route path="/camping" element={<Campingcomponent />} />
          <Route path="/motor-detail/:id" element={<Detailmotors />} />
          <Route path="/motor-detail/:id" element={<DetailVmotors />} />
          <Route path="/tuning-detail/:id" element={<Detailtuning />} />
          <Route path="/tuning-detail/:id" element={<DetailVtuning />} />
          <Route path="/used-car-detail/:id" element={<Detailusedcar />} />
          <Route path="/used-car-detail/:id" element={<DetailVusedcar />} />
          <Route path="/caravan-detail/:id" element={<Detailcaravan />} />
          <Route path="/caravan-detail/:id" element={<DetailVcaravan />} />
          <Route path="/" element={<Logincomponent />} />
          <Route path="/sing-up" element={<Singupcomponent />} />
          <Route path="/camping-place/:id" element={<Campingdetail />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/motor-order/:id" element={<Myordercomponent />} />
          <Route path="/cart" element={<Cartpagecomponent />} />
          <Route path="/motor-compare/:id" element={<Comparepage />} />
          <Route path="/caravan-order/:id" element={<Caravanorder />} />
                    <Route path="/caravan-order/:id" element={<Caravanorder />} />
          <Route path="/caravan-compare/:id" element={<Comparecaravan />} />
          <Route path="/tuning-order/:id" element={<Tuningorder />} />
          <Route path="/tuning-compare/:id" element={<Tuningcompare />} />
          <Route path="/used-car-order/:id" element={<Usedcarorder />} />
          <Route path="/used-car-compare/:id" element={<Usedcarcom />} />
        </Routes>
        {!hideNavbarFooter && <Footercomponents />}
      </>
    </>
  );
};

export default Routercomponent;
