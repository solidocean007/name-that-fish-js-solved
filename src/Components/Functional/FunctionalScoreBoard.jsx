import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({ fishLeft, score }) {
  const { incorrectCount, correctCount } = score;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fishLeft.map((item)=> (
          <div key={item} className="choice">
            {item}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
