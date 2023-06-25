import "./styles/score-board.css";
//  Where the score is presented


export function FunctionalScoreBoard({ fish, score }) {
  console.log(fish);
  const { incorrectCount, correctCount } = score;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fish.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
