import React, { useState } from "react";
import Exam from "../Exam/Exam";

const Profile = () => {
  const [show, setShow] = useState(false);

  const showdataArray = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" flex justify-center items-center">
        <div className=" bg-red-900 h-64 w-56 mt-24 flex flex-col justify-around items-center">
          <div className="bg-red-600 h-24 w-24 rounded-full flex items-center justify-center">
            <h3 className=" text-6xl">S</h3>
          </div>
          <h3>Satvik Sinha</h3>
        </div>
      </div>
      <button
        className="bg-red-700 relative top-12 rounded-md p-3 mb-12"
        onClick={showdataArray}
      >
        Start test
      </button>
      {show ? <Exam /> : null}
    </div>
  );
};

export default Profile;
