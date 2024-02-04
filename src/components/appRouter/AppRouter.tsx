import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Oymyakon from "../../pages/oymyakon/Oymyakon";
import { tourGallery } from "../../utils/helpers";
import Chum from "../../pages/chum/Chum";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path="/oymyakon" element={<Oymyakon tour={tourGallery[0]}/>}/>
        <Route path="/chum" element={<Chum tour={tourGallery[5]}/>}/>
      </Routes>
    </>
  );
}
