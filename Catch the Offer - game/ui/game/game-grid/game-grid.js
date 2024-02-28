import { data } from "../../../data.js";
import { Cell } from "./cell/Cell.js";

export function gameGrid() {
  const tableElement = document.createElement("table");
  // tableElement.append('gameGrid')

  for (let y = 0; y < data.rowCount; y++) {
    const rowElement = document.createElement("tr");

    for (let x = 0; x < data.columnCount; x++) {
      const cellElement = Cell(x, y);
      rowElement.append(cellElement);
    }

    tableElement.append(rowElement);
  }

  return tableElement;
}
