import { data } from "../../../data.js";

export function gameGrid() {
  const tableElement = document.createElement("table");
  // tableElement.append('gameGrid')

  for (let y = 0; y < 3; y++) {
    const rowElement = document.createElement("tr");

    for (let x = 0; x < 3; x++) {
      const columnElement = document.createElement("td");
      columnElement.append(`x:${x} y:${y}`);
      tableElement.append(columnElement);
    }

    tableElement.append(rowElement);
  }

  return tableElement;
}
