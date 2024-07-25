import React, { useState } from "react";
import '../Css/Question11.css';  

const triviaQuestions = {
  question1: {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  question2: {
    question: "What is the largest ocean on Earth?",
    answer: "The Pacific Ocean",
  },
};

function Question11() {
  const { question1, question2 } = triviaQuestions;
  const [questionDisplay, setQuestionDisplay] = useState(null);

  function handleQuestion1() {
    alert(question1.answer);
    setQuestionDisplay(question1);
  }

  function handleQuestion2() {
    alert(question2.answer);
    setQuestionDisplay(question2);
  }

  return (
    <div>
      <button onClick={handleQuestion1}>
        Question 1: {question1.question}
      </button>
      <button onClick={handleQuestion2}>
        Question 2: {question2.question}
      </button>
      {questionDisplay && <p>{questionDisplay.question}</p>}
    </div>
  );
}

export default Question11;
