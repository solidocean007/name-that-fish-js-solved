import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { incorrectCount, correctCount } = this.props.score;
    const fishLeft = this.props.fishLeft;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {fishLeft.map((item) => (
            <div key={item} className="choice">
              {item}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
