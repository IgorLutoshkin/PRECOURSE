import { Header } from "./Heder/Heder.js";
import { TasksList } from "./TasksList/TasksList.js";
import { data, openDialog } from "../../data/data.js";
import { Button } from "./Button/Button.js";
import { Dialog } from "./Dialog/Dialog.js";

export function Todolist() {
  const container = document.createElement("div");

  container.append(Header());
  container.append(TasksList(data.tasks));
  container.append(Dialog());
  container.append(Button("+add", () => openDialog()));

  return container;
}
