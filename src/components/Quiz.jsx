import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}



// import {useState,useCallback} from "react";
// import QUESTIONS from "../questions.js";
// import quizCompleteImg from "../assets/quiz-complete.png"
// import Question from "./Question.jsx";

// export default function Quiz(){
   
// //using useState(''); since it is unanswered in the beginning
// //This is present answer state
// const[answerState,setAnswerState] = useState('');
// const [userAnswers,setUserAnswers]=useState([]);

// const activeQuestionIndex = answerState === ' ' ? userAnswers.length : userAnswers.length-1;
// const quizIsComplete = activeQuestionIndex===QUESTIONS.length;

// const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){ 
// //Changing state to answered once the user select the answers       
// setAnswerState('answered');
// setUserAnswers((prevUserAnswers)=>{
// //Storing selected answers....    
// return[...prevUserAnswers,selectedAnswer];
// });

// setTimeout(()=>{
// //Checking if the answer is correct or wrong and in 1000ms we display whether right or wrong
// if(selectedAnswer===QUESTIONS[activeQuestionIndex].answers[0]){
//     setAnswerState('correct');
// }
// else{
//     setAnswerState('wrong')
// }

// setTimeout(()=>{
// setAnswerState('');
// },2000)
// },1000);
// },
// //Since this function is wrapped in useCallback we need to put here dependencies whenever activeQuestionIndex value will change and this will recreate useCallback
// [activeQuestionIndex]);

// const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);

// if(quizIsComplete){
//     return (<div id="summary">
//         <img src={quizCompleteImg} alt="Trophy icon"/>
// <h2>Quiz Completed!</h2>
//     </div>
//     );
// }

// return (
// <div id="quiz">
// <Question 
// key={activeQuestionIndex}
// questionText={QUESTIONS[activeQuestionIndex].text} 
// answers={QUESTIONS[activeQuestionIndex].answers}
// onSelectAnswer={handleSelectAnswer}
// answerState={answerState}
// selectedAnswer={userAnswers[userAnswers.length-1]}
// onSkipAnswer={handleSkipAnswer}
// />
// </div>
// );
// }
