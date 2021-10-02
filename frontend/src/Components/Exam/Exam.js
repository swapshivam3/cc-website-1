import React, { useState } from "react";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";

const Exam = () => {
  const [show, setShow] = useState(false);
  const dataArray = useSelector((state) => state.questions);
  if (dataArray) {
    console.log(dataArray.data);
  }

  const showdataArray = () => {
    setShow(!show);
  };
  return (
    <div className="relative z-10 text-white text-center text-2xl font-bold">
      <h1>EXAM PORTAL</h1>
      <Profile />
      <button
        className="bg-red-700 relative top-12 rounded-md p-3"
        onClick={showdataArray}
      >
        Start test
      </button>
      {show
        ? dataArray === undefined
          ? dataArray.data.map((question) => <div>{question.qtxt}</div>)
          : "BACKEND ERROR"
        : null}
    </div>
  );
};

export default Exam;
