import { Header } from "./Heder/Heder.js";
import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { TasksList } from "./TasksList/TasksList.js";
import { data } from "../../data/data.js";

export function Todolist() {
  const container = document.createElement("div");

  container.append(Header());
  container.append(TasksList(data.tasks));
  container.append(ButtonsPanel());

  return container;
}
