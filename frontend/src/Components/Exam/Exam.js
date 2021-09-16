import React from 'react';
import {useSelector} from 'react-redux';

 const Exam = () =>{
     const dataArray = useSelector((state) => state.questions);
     console.log(dataArray);
    return (
        <div className="relative z-10 text-white">
        <h1>EXAM PORTAL</h1>
            {dataArray.data.title}
        </div>
    )
}

export default Exam;
