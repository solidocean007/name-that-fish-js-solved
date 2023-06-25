import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ fish, handleScore }) {
  const [userInput, setUserInput] = useState("");
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
        </>
      )}
    </div>
  );
}
