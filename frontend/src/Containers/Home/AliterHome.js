import React, { useState, useEffect } from "react";
import "./AliterHome.css";
import Carousel from "../../Components/Carousel/Carousel";
import CubeCarousel from "../../Components/CubeCarousel/CubeCarousel";
import Landing from "../../Components/Landing/Landing";

const AliterHome = () => {
  // const [componentIndex, setComponentIndex] = useState(0);
  // const components = [<Landing />, <Carousel />, <CubeCarousel />];
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 38:
        document.querySelector("#home").classList.add("top-1");
        break;
      case 40:
        document.querySelector("#home").classList.add("top-2");
        break;
    }
  });

  // //console.log(components);
  // const keyHandler = (e) => {
  //   console.log("PRESSED");
  // };

  return (
    <div id="home" className="relative h-screen w-screen z-10">
      <Landing />
      <Carousel />
      <CubeCarousel />
    </div>
  );
};

export default AliterHome;
