import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = { userInput: "" };
  render() {
    const { fish } = this.props;
    const { handleScore } = this.props;

    let nextFishToName = null;

    if (fish && fish.length > 0) {
      nextFishToName = fish[0];
    }
    return (
      <div id="game-board">
        {nextFishToName && (
          <>
            <div id="fish-container">
              <img src={nextFishToName.url} alt={nextFishToName.name} />
            </div>
            <form
              id="fish-guess-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ userInput: "" });
                handleScore(this.state.userInput, nextFishToName.name);
              }}
            >
              <label htmlFor="fish-guess">What kind of fish is this?</label>
              <input
                type="text"
                name="fish-guess"
                onChange={(e) => {
                  this.setState({ userInput: e.target.value });
                }}
                value={this.state.userInput}
              />
              <input type="submit" />
            </form>
          </>
        )}
      </div>
    );
  }
}
