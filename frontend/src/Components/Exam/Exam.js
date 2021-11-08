import React, { useState } from "react";
import { useSelector } from "react-redux";
import questions from "./questions.json";
import './Exam.css';

const Exam = () => {
  
  const dataArray = useSelector((state) => state.questions);
  if (dataArray) {
    console.log(dataArray.data);
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    setSubmitted(true);
  };

  return (
    <div className="z-10 flex flex-col px-5 justify-center items-center ExamComp">
      {submitted ? (<h1 className="text-3xl font-semibold text-center text-white mt-10">
        Thank you for your participation, we will get in touch with you soon.
      </h1>) :
        
      <div className="w-3/4">    
          
      <div className="flex flex-col items-start w-full p-10">
        <h4 className="mt-10 text-xl text-white/60">Question {currentQuestion + 1} of {questions.length}</h4>
        <div className="mt-4 text-2xl text-white">
          {questions[currentQuestion].question}
        </div>
      </div>

      <div className="flex flex-col w-full">
        {questions[currentQuestion].answerOptions.map((answer, index) => (
        <div
          key={index}
          className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
        >
        <input
        type="radio"
        name={answer.answer}
        value={answer.answer}
        onChange={(e) => handleAnswerOption(answer.answer)}
        checked={
          selectedOptions[currentQuestion] ? (answer.answer === selectedOptions[currentQuestion].answerByUser) : false
        }
        className="w-6 h-6 bg-black"
            />
      <p className="ml-6 text-white">{answer.answer}</p>
      </div>
      ))}
      </div>

      <div className="flex justify-between w-full mt-4 text-white">
        <button onClick={handlePrevious} className="w-1/2 m-1 py-3 bg-indigo-600 rounded-lg">Previous</button>
        <button onClick={currentQuestion + 1 === questions.length ? handleSubmitButton : handleNext} className="w-1/2 m-1 py-3 bg-indigo-600 rounded-lg">{currentQuestion + 1 === questions.length ? "Submit" : "Next"}</button>
      </div>

      </div>}
      
    </div>
  );
};

export default Exam;
