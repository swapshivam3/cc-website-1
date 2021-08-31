import React, { useState } from "react";
import DepartmentDetails from "../DepartmentDetails/DepartmentDetails";
import "./DepartmentCard.css";

const DepartmentCard = () => {
  const [show, setShow] = useState(false);

  const onCardClick = () => {
    setShow(!show);
  };
  return (
    <div className="mt-5">
      <div
        onClick={onCardClick}
        className="bg-gray-700 card1 w-72  mb-8 m-auto text-gray-400 p-4 cursor-pointer"
      >
        {/* <div className="text-center  text-xl pb-2 ">Department</div>*/}
        <div>
          <img
            src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?size=626&ext=jpg"
            alt="appdev"
          />
        </div>
        <div className=" bg-gray-900 w-full h-1"></div>
        <div className="text-lg  ">
          Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Facilis, excepturi?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Autem, blanditiis!
        </div>
      </div>
      {show ? <DepartmentDetails /> : null}
    </div>
  );
};

export default DepartmentCard;
