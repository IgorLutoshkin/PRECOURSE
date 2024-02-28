import { data } from "../../../data.js";
import { RestartButton } from "./winButton/RestartButton.js";

export function Win() {
  const winElement = document.createElement("div");
  winElement.append(
    `You win with the result: catch: ${data.cathPoints} ~ miss: ${data.missPoints}`
  );

  const restartButton = RestartButton();
  winElement.append(restartButton);

  return winElement;
}
