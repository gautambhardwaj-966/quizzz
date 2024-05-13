import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

// import { useEffect, useState } from "react";
// import QUESTIONS from "../questions.js";
// export default function QuestionTimer({timeout,onTimeout}){

// const [remainingTime,setRemainingTime]=useState(timeout);

// useEffect(()=>{
//    const timer = setTimeout(onTimeout,timeout)

//    return()=>{
//    clearTimeout(timer);
//   };
// }
// ,[onTimeout,timeout])

// useEffect(()=>{
//    const interval = setInterval(()=>{
//         setRemainingTime((prevRemainingTime)=>prevRemainingTime-100);
//         },100);

//         return ()=>{
//           clearInterval(interval);
//          };
// },[]);


//     return <progress id="question-time" max={timeout} value={remainingTime}/>;
// }
