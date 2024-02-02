import { ButtonDelete } from "../../ButtonsPanel/ButtonDelete/ButtonDelete.js";

export function Tasks(task) {
  // add item
  const container = document.createElement("li");
  container.append(task.titleTask);

  const deleteElement = ButtonDelete(task.id); // в переменную закинули нашу функцию которая создает кнопку со слушателем
  container.append(deleteElement); //добавляем функцию - кнопку в "лишку"
  return container;
}
