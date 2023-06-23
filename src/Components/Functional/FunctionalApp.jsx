import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp({ initialFishes }) {
  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard initialFishes={ initialFishes }/>
      {false && <FunctionalFinalScore />}
    </>
  );
}
