import { getScore } from "../../../data.js";
import { RestartButton } from "./winButton/RestartButton.js";

export function Win() {
  const winElement = document.createElement("div");
  winElement.append(
    `You win with the result: PLayer1: ${getScore().playerPoints1} ~ Player2: ${getScore().playerPoints2}`
  );

  const restartButton = RestartButton();
  winElement.append(restartButton);

  return winElement;
}
