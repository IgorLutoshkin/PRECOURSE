import { Dialog } from "../Dialog/Dialog.js";

export function ButtonsPanel() {
  const container = document.createElement("div");
  const btnElement = document.createElement("button");
  btnElement.append("+ add");

  btnElement.addEventListener("click", () => Dialog());

  container.append(btnElement);
  return container;
}
