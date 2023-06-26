import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    fishIndex: 0,
    score: {
      incorrectCount: 0,
      correctCount: 0,
    },
    fish: this.props.initialFishes,
  };

  handleScore = (userGuess, fishName) => {
    const isCorrect =
      fishName.toLocaleLowerCase() === userGuess.toLocaleLowerCase();
    if (isCorrect) {
      this.setState((prevState) => ({
        score: {
          ...prevState.score,
          correctCount: prevState.score.correctCount + 1,
        },
      }));
    } else {
      this.setState((prevState) => ({
        score: {
          ...prevState.score,
          incorrectCount: prevState.score.incorrectCount + 1,
        },
      }));
    }
    this.setState({fishIndex: this.state.fishIndex + 1});
  };

  render() {
    const { score, fish, fishIndex } = this.state;
    const gameEnd = fishIndex === 4;
    const fishLeft = fish.map((el) => el.name).slice(fishIndex);
    return (
      <>
        {!gameEnd && <ClassScoreBoard score={score} fishLeft={fishLeft} />}
        {!gameEnd && (
          <ClassGameBoard fishData={fish[fishIndex]} handleScore={this.handleScore} />
        )}
        {gameEnd && <ClassFinalScore score={score} />}
      </>
    );
  }
}
