import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  render() {
    const {initialFishes} = this.props;
    const nextFishToName = initialFishes[0];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
