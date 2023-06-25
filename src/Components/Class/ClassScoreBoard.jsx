import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {

  render() {
    const { incorrectCount,  correctCount} = this.props.score;
    const fish = this.props.fish;
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
}
