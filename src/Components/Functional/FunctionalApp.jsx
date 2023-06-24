import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp({ initialFishes }) {
  const [score, setScore]= useState({
    correctCount: 0,
    incorrectCount: 0,
  })

  const handleScore = (userGuess, fishName) => {
    const isCorrect = fishName === userGuess;
    if(isCorrect){
      setScore(prevScore => ({
        ...prevScore, correctCount: prevScore.correctCount + 1,
      }))
    } else {
      setScore((prevScore)=>({
        ...prevScore, incorrectCount: prevScore.incorrectCount +1,
      }))
    }
  }

  return (
    <>
      <FunctionalScoreBoard score={score}/>
      <FunctionalGameBoard initialFishes={ initialFishes } handleScore={handleScore}/>
      {false && <FunctionalFinalScore />}
    </>
  );
}
