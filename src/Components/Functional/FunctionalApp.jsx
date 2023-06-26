import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp({ initialFishes }) {
  const [fishIndex, setFishIndex] = useState(0);
  const [fish, setFish] = useState(initialFishes); // Create fish state which is an array of fish objects.
  const [score, setScore] = useState({
    // Create score state which is an object of 2 different counts.
    correctCount: 0,
    incorrectCount: 0,
  });

  const fishLeft = fish.map((el)=> el.name).slice(fishIndex);

  const gameEnd = fishIndex === 4;

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
    setFishIndex(fishIndex + 1);
  };

  return (
    <>
      {!gameEnd && <FunctionalScoreBoard fishLeft={fishLeft} score={score} />}
      {!gameEnd && (
        <FunctionalGameBoard fishData={initialFishes[fishIndex]} handleScore={handleScore} />
      )}
      {gameEnd && <FunctionalFinalScore score={score} />}
    </>
  );
}
