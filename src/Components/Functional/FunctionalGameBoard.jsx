import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ fishData, handleScore }) {
  const [userInput, setUserInput] = useState("");
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
              handleScore(userInput, fishData.name);
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
        </>
      )}
    </div>
  );
}
