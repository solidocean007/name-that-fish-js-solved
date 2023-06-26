import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = { userInput: "" };
  render() {
    const { fishData } = this.props;
    const { handleScore } = this.props;

    return (
      <div id="game-board">
        {fishData && (
          <>
            <div id="fish-container">
              <img src={fishData.url} alt={fishData.name} />
            </div>
            <form
              id="fish-guess-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ userInput: "" });
                handleScore(this.state.userInput, fishData.name);
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
