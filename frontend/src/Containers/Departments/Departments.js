import React from "react";
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";

const Departments = () => {
  return (
    <div>
      <div className="grid grid-cols-3 h-full">
        <DepartmentCard />
        <DepartmentCard />
        <DepartmentCard />
        <DepartmentCard />
        <DepartmentCard />
        <DepartmentCard />
      </div>
    
    </div>
  );
};

export default Departments;
