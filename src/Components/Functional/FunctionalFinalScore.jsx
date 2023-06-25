import "./styles/final-score.css";

export const FunctionalFinalScore = ({ score }) => {
  const totalCount = score.correctCount + score.incorrectCount;
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{score.correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
