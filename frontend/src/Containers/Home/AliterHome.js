import React, { useState, useEffect } from "react";
import "./AliterHome.css";
import Carousel from "../../Components/Carousel/Carousel";

const AliterHome = () => {
  const [render, setRender] = useState(false);
  const [border, setBorder] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
      setBorder(0);
    }, 5000);
  });

  const styles = {
    border: `${border} solid white`,
  };

  return (
    <div className="relative z-10">
      {/*<div style={{ mixBlendMode: "overlay" }} className="bg-gray-900">
        <video
          className="video"
          src="./assets/video.mp4"
          muted="true"
          loop="true"
          autoPlay="true"
        />
  </div>*/}
      <div className="w-screen flex justify-center">
        <h1 className="typing absolute top-60  text-white text-7xl">
          <div style={styles} className="type-text">
            CODING CLUB
          </div>
        </h1>
      </div>
      <div className="w-screen flex justify-center">
        <h1 className="typing absolute top-80  text-white text-4xl">
          {render ? <div className="type-text">BITS PILANI</div> : null}
        </h1>
      </div>
      <Carousel />
    </div>
  );
};

export default AliterHome;
