import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Oymyakon from "../../pages/oymyakon/Oymyakon";
import { tourGallery } from "../../utils/helpers";
import Chum from "../../pages/chum/Chum";
import Tour from "../../pages/tour/Tour";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        {tourGallery.map((tour) => {
          return <Route path={tour.path} element={<Tour tour={tour}/>}/>
        })}
        {/* <Route path="/oymyakon" element={<Oymyakon tour={tourGallery[0]}/>}/>
        <Route path="/chum" element={<Chum tour={tourGallery[5]}/>}/> */}
        <Route path="/tours" element={<Oymyakon tour={tourGallery[0]}/>}/>
      </Routes>
    </>
  );
}
