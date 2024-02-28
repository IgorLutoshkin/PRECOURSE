import { restart } from "../../../../data.js";

export function RestartButton() {
  const buttonElement = document.createElement("button");
  buttonElement.append("RESTART");
  buttonElement.addEventListener("click", restart);
  return buttonElement;
}
