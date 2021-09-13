import React, { useState, useCallback } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./CubeCarousel.css";

const CubeCarousel = () => {
  const [clicked, setClicked] = useState(false);
  // const [dimension, setDimension] = useState({
  //   height: "16rem",
  //   width: "32rem",
  // });
  // let height, width;

  // useEffect(() => {
  //   console.log("yo");
  //   height = document.querySelector(".a").clientHeight;
  //   width = document.querySelector(".a").clientWidth;
  //   console.log(height, width);
  // });

  const expandImage = () => {
    console.log("Clicked");
    //setClicked(!clicked);
    //   setDimension({
    //     height: height + 500,
    //     width: width + 500,
    //   });
    //document.querySelector(".cube").classList.toggle("cube-animation");
    //   console.log(dimension.height, dimension.width);
  };

  // const imgStyle = {
  //   height: dimension.height,
  //   width: dimension.width,
  // };

  return (
    <div className="cube-carousel-position w-screen h-screen ">
      <div className=" scene m-auto pt-40 scene w-20 h-20">
        <div className="cube cube-animation relative">
          <div className="face a absolute  text-center  bg-red-500 text-white front">
            <Zoom zoomMargin={40} overlayBgColorEnd={"rgba(0,0,0,0.1)"}>
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </Zoom>
          </div>
          <div className="face b absolute text-center  bg-purple-500 text-white back">
            <Zoom zoomMargin={40} overlayBgColorEnd={"rgba(0,0,0,0.1)"}>
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </Zoom>
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
            <Zoom zoomMargin={40} overlayBgColorEnd={"rgba(0,0,0,0.1)"}>
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </Zoom>
          </div>
          <div className="face f absolute text-center  bg-yellow-500 text-white bottom">
            <Zoom zoomMargin={40} overlayBgColorEnd={"rgba(0,0,0,0.1)"}>
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </Zoom>
          </div>
        </div>
      </div>
      {clicked ? (
        <div>
          <img
            onClick={() => {
              setClicked(false);
            }}
            className="relative m-auto  z-10 -mt-20 modal"
            src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="wall"
          />
          {/*<button
            onClick={() => {
              setClicked(false);
            }}
            className="absolute top-20 right-20 text-white z-20"
          >
            <svg
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          </button>*/}
        </div>
      ) : null}
    </div>
  );
};

export default CubeCarousel;
