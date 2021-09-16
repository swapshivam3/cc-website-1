import React from 'react';
import {useSelector} from 'react-redux';

 const Exam = () =>{
     const dataArray = useSelector((state) => state.questions);
     console.log(dataArray.data);
    return (
        <div className="relative z-10 text-white text-center text-2xl font-bold">
        <h1>EXAM PORTAL</h1>
            {dataArray.data.map(question => <div>{question.qtxt}</div>)}
        </div>
    )
}

export default Exam;
