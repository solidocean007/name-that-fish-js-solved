import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp({ initialFishes }) {
  const [score, setScore]= useState({
    correctCount: 0,
    incorrectCount: 0,
  })
  return (
    <>
      <FunctionalScoreBoard score={score}/>
      <FunctionalGameBoard initialFishes={ initialFishes } setScore={setScore}/>
      {false && <FunctionalFinalScore />}
    </>
  );
}
