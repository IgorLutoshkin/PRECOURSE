import { addElement } from "../../../data/data.js";

export function Dialog() {
  const container = document.createElement("dialog");
  container.setAttribute("open", "true");

  const inputElement = document.createElement("input");
  inputElement.placeholder = "Input your new task";
  container.append(inputElement);

  //
  const ButtonSave = document.createElement("button");
  ButtonSave.append("Save");
  ButtonSave.addEventListener("click", () => addElement(inputElement));
  container.append(ButtonSave);

  //
  const ButtonCancel = document.createElement("button");
  ButtonCancel.append("Cancel");
  container.append(ButtonCancel);

  document.body.append(container);

  return container;
}
