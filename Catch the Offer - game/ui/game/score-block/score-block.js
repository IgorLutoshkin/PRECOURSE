import { data } from "../../../data.js";

export function scoreBlock() {
  const scoreBlockElement = document.createElement("div");
  scoreBlockElement.append(`Catch:${data.cathPoints} Miss: ${data.missPoints}`);
  return scoreBlockElement;
}
