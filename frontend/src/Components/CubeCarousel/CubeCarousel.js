import React, { useState, useCallback, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useSpring, animated } from "react-spring";
import "./CubeCarousel.css";

const CubeCarousel = () => {
  const [clicked, setClicked] = useState(false);
  const [props, setprops] = useState("");
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  const expandImage = () => {
    console.log("Clicked");
    setClicked(!clicked);
  };

  return (
    <div className="cube-carousel-position w-screen h-screen ">
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
      {clicked ? (
        <animated.div style={props}>
          <img
            onClick={() => {
              setClicked(false);
            }}
            className="relative m-auto z-10 -mt-20 modal"
            src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="wall"
          />
        </animated.div>
      ) : null}
    </div>
  );
};

export default CubeCarousel;
