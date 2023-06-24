import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    score: {
      incorrectCount: 0,
      correctCount: 0,
    },
  };

  handleScore = (userGuess, fishName) => {
    const isCorrect = fishName === userGuess;
    if (isCorrect) {
      this.setState(prevState => ({
        score: {
          ...prevState.score,
          correctCount: prevState.score.correctCount + 1,
        }
      }));
    } else {
      this.setState(prevState => ({
        score: {
          ...prevState.score,
          incorrectCount: prevState.score.incorrectCount + 1,
        }
      }));
    }
  };
  

  render() {
    const { initialFishes } = this.props;
    const { score } = this.state;
    return (
      <>
        <>
          <ClassScoreBoard score={score} />
          <ClassGameBoard
            initialFishes={initialFishes}
            handleScore={this.handleScore}
          />
        </>
        {false && <ClassFinalScore />}
      </>
    );
  }
}
