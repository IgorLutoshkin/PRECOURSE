import { getScore } from "../../../data.js";

export function scoreBlock() {
  const scoreBlockElement = document.createElement("div");
  scoreBlockElement.append(`Player1:${getScore().playerPoints1} Player2: ${getScore().playerPoints2}`);
  return scoreBlockElement;
}
