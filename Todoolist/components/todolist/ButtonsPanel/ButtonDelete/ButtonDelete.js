//create btn delete

import { deleteElement } from "../../../../data/data.js";

export function ButtonDelete(task) {
  const container = document.createElement("button");
  container.append("x");

  container.addEventListener("click", () => deleteElement(task));// слушателя ставим
  return container;
}
