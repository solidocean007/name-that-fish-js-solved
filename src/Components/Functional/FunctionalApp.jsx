import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp({ initialFishes }) {
  const [fish, setFish] = useState(initialFishes); // Create fish state which is an array of fish objects.
  const [score, setScore] = useState({
    // Create score state which is an object of 2 different counts.
    correctCount: 0,
    incorrectCount: 0,
  });

  // create function that removes the fish object.
  const removeFish = (usedName) => {
    const newFishList = fish.filter((fish) => fish.name !== usedName);
    setFish(newFishList);
  };

  const gameEnd = fish.length === 0;

  const handleScore = (userGuess, fishName) => {
    // This is called on the users input form on FunctionalGameBoard.
    const isCorrect =
      fishName.toLocaleLowerCase() === userGuess.toLocaleLowerCase();
    if (isCorrect) {
      setScore((prevScore) => ({
        ...prevScore,
        correctCount: prevScore.correctCount + 1,
      }));
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        incorrectCount: prevScore.incorrectCount + 1,
      }));
    }
    removeFish(fishName);
  };

  return (
    <>
      {!gameEnd && <FunctionalScoreBoard fish={fish} score={score} />}
      {!gameEnd && (
        <FunctionalGameBoard fish={fish} handleScore={handleScore} />
      )}
      {gameEnd && <FunctionalFinalScore score={score} />}
    </>
  );
}
