import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ initialFishes, handleScore }) {
  const [userInput, setUserInput] = useState("");
  const nextFishToName = initialFishes[0];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleScore(userInput, nextFishToName.name);
          setUserInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
