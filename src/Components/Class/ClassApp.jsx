import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { initialFishes } = this.props;
    return (
      <>
        <>
          <ClassScoreBoard />
          <ClassGameBoard initialFishes={initialFishes}/>
        </>
        {false && <ClassFinalScore />}
      </>
    );
  }
}
