import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import "./CubeCarousel.css";

const CubeCarousel = () => {
  const [clicked, setClicked] = useState(false);

  const expandImage = () => {
    console.log("Clicked");
    setClicked(!clicked);
  };

  return (
    <div
      className="cube-carousel-position w-screen"
      style={{ marginBottom: "100px" }}
    >
      <h1 className="achievement pl-8 text-7xl text-center">EVENTS</h1>
      {!clicked ? (
        <div className=" scene m-auto pt-40 scene w-20 h-20">
          <div className="cube cube-animation relative">
            <div className="face a absolute  text-center  bg-red-500 text-white front">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
            <div className="face b absolute text-center  bg-purple-500 text-white back">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
            <div
              className="face c absolute text-center  bg-pink-500 text-white right"
              style={{ width: "16rem" }}
            >
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
              />
            </div>
            <div
              className="face d absolute text-center bg-green-500 text-white left"
              style={{ width: "16rem" }}
            >
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
              />
            </div>
            <div className="face e absolute text-center bg-blue-500 text-white top">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
            <div className="face f absolute text-center  bg-yellow-500 text-white bottom">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
          </div>
        </div>
      ) : null}
      {clicked ? (
        <div>
          <img
            onClick={() => {
              setClicked(false);
            }}
            className="relative m-auto z-10 -mt-20 modal"
            src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="wall"
          />
        </div>
      ) : null}
    </div>
  );
};

export default CubeCarousel;
