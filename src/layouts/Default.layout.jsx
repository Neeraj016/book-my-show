import React from "react";
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.components";



const DefaultLayout = (props) => {
  return (
    <>
    <Navbar/>
    <HeroCarousal/>
    {props.children}
    </>
  );
};

export default DefaultLayout;