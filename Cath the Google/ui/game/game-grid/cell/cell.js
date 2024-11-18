import {
  getGooglePosition,
  getPlayer1Position,
  getPlayer2Position,
} from "../../../../data.js";
import { Google } from "../offer/google.js";
import { Player1 } from "../player1/Player1.js";
import { Player2 } from "../player2/Player2.js";

export function Cell(x, y) {
  const columnElement = document.createElement("td");
  // columnElement.append(`x:${x} y:${y}`);
  if (x === getGooglePosition().x && y === getGooglePosition().y) {
    columnElement.append(Google()); // добавали отрисовку
  }
  if (getPlayer1Position().x === x && getPlayer1Position().y === y) {
    columnElement.append(Player2()); // добавали отрисовку
  }
  if (getPlayer2Position().x === x && getPlayer2Position().y === y) {
    columnElement.append(Player1()); // добавали отрисовку
  }

  return columnElement;
}
