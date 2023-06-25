import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp({ initialFishes }) {
  const [fish, setFish] = useState(initialFishes);
  const [score, setScore]= useState({
    correctCount: 0,
    incorrectCount: 0,
  })

  // create function that removes the fish object after successful guess.
  const removeFish = (usedName) => {
    const newFishList = fish.filter((fish) => fish.name !== usedName);
    setFish(newFishList);
  }

  const handleScore = (userGuess, fishName) => {
    const isCorrect = fishName === userGuess;
    if(isCorrect){
      setScore(prevScore => ({
        ...prevScore, correctCount: prevScore.correctCount + 1,
      }));
      removeFish(fishName);
    } else {
      setScore((prevScore)=>({
        ...prevScore, incorrectCount: prevScore.incorrectCount +1,
      }))
    }
  }

  return (
    <>
      <FunctionalScoreBoard fish={ fish } score={score}/>
      <FunctionalGameBoard initialFishes={ initialFishes } handleScore={handleScore}/>
      {false && <FunctionalFinalScore />}
    </>
  );
}
