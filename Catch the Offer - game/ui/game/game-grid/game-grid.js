import { data } from "../../../data.js";
import { offer } from "./offer/offer.js";

export function gameGrid() {
  const tableElement = document.createElement("table");
  // tableElement.append('gameGrid')

  for (let y = 0; y < data.rowCount; y++) {
    const rowElement = document.createElement("tr");

    for (let x = 0; x < data.columnCount; x++) {
      const columnElement = document.createElement("td");
      // columnElement.append(`x:${x} y:${y}`);
      if (x === data.x && y === data.y) {
        columnElement.append(offer()); // добавали отрисовку оффера
      }
      tableElement.append(columnElement);
    }

    tableElement.append(rowElement);
  }

  return tableElement;
}
