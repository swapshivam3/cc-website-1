import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  // const [style, setStyle] = useState("");
  const [currdeg, setCurrdeg] = useState(0);

  const prevCarousel = () => {
    setCurrdeg(currdeg + 60);
  };

  const nextCarousel = () => {
    setCurrdeg(currdeg - 60);
  };

  const styles = {
    transform: `rotateY(${currdeg}deg)`,
  };

  return (
    <div className="carousel-position w-screen h-screen top-10 relative z-10">
      <div>
        <h1 className="achievement pl-8 text-4xl">ACHIEVEMENTS</h1>
      </div>
      <div className="flex justify-between relative top-12 items-center">
        <div>
          <button
            onClick={prevCarousel}
            className="text-white ml-24 bg-red-900 p-4 rounded-lg "
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
            </svg>
          </button>
        </div>
        <div className="container1 pt-8 relative">
          <div
            className="carousel h-full w-full text-center text-white"
            style={styles}
          >
            <div className="thumbnail a1 bg-gray-500">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxpbmQlMjBjb2Rpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="thumbnail"
              />
            </div>
            <div className="thumbnail b1 bg-gray-600">
              <img
                src="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="thumbnail"
              />
            </div>
            <div className="thumbnail c1 bg-gray-500">
              <img
                src="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="thumbnail"
              />
            </div>
            <div className="thumbnail d1 bg-gray-600">
              <img
                src="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="thumbnail"
              />
            </div>
            <div className="thumbnail e1 bg-gray-500">
              <img
                src="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="thumbnail"
              />
            </div>
            <div className="thumbnail f1 bg-gray-600">
              <img
                src="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={nextCarousel}
            className="text-white mr-24 bg-red-900 p-4 rounded-lg "
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
