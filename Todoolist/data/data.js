export const data = {
  id: crypto.randomUUID(),
  title: "Todolist",
  tasks: [
    {
      id: crypto.randomUUID(),
      titleTask: "Learn HTML",
    },
    {
      id: crypto.randomUUID(),
      titleTask: "Learn CSS",
    },
    {
      id: crypto.randomUUID(),
      titleTask: "Learn JS",
    },
    {
      id: crypto.randomUUID(),
      titleTask: "Learn React",
    },
  ],
};

let notifySubscribe = null;

export function subscribe(subscriber) {
  notifySubscribe = subscriber;
}

export function deleteElement(taskId) {
  let tasks = data.tasks;
  data.tasks = tasks.filter((t) => t.id !== taskId);
  notifySubscribe();
}
