import React from "react";
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";
import {useSelector} from 'react-redux';

const Departments = () => {
  const dataArray = useSelector((state) => state.departments);
  if (dataArray) {
    console.log(dataArray);
  }
  
  return (
    <div>
      <div className="grid  h-full dept-card-main">
      
        <DepartmentCard alignment={1}/>
        <DepartmentCard alignment={2}/>
        <DepartmentCard alignment={3}/>
        <DepartmentCard alignment={1}/>
        <DepartmentCard alignment={2}/>
        <DepartmentCard alignment={3}/>
      </div>
    </div>
  );
};

export default Departments;
