import {
  EVENTS,
  getGooglePosition,
  getPlayer1Position,
  getPlayer2Position,
  subscribe,
  unsubscribe,
} from "../../../../data.js";
import { Google } from "../offer/google.js";
import { Player1 } from "../player1/Player1.js";
import { Player2 } from "../player2/Player2.js";

export function Cell(x, y) {
  let prevState = "empty";

  function getCurrenState() {
    if (x === getGooglePosition().x && y === getGooglePosition().y) {
      return "google";
    } else if (getPlayer1Position().x === x && getPlayer1Position().y === y) {
      return "player_1";
    } else if (getPlayer2Position().x === x && getPlayer2Position().y === y) {
      return "player_2";
    } else {
      return "empty";
    }
  }

  function render() {

    console.log(1);
    
    const currentState = getCurrenState(); // после колбэка вызовется render если условие true
    // getCurrenState тоже вернет новое значение
    columnElement.innerHTML = "";

    unsubscribe(EVENTS.GOOGLE_JUMPED, render);
    unsubscribe(EVENTS.PLAYER1_MOVED, render);
    unsubscribe(EVENTS.PLAYER2_MOVED, render);

    switch (currentState) {
      case "google":
        subscribe(EVENTS.GOOGLE_JUMPED, render);
        columnElement.append(Google());
        break;
      case "player_1":
        subscribe(EVENTS.PLAYER1_MOVED, render);
        columnElement.append(Player1());
        break;
      case "player_2":
        subscribe(EVENTS.PLAYER2_MOVED, render);
        columnElement.append(Player2());
        break;
      case "empty":
        subscribe(EVENTS.GOOGLE_JUMPED, render);
        subscribe(EVENTS.PLAYER1_MOVED, render);
        subscribe(EVENTS.PLAYER2_MOVED, render);

      default:
        break;
    }

    prevState = currentState; //создается для каждой ячейки и хранит свое значение
  }

  // когда поменялись данные, так как гугл прыгает каждую секунду то они меняютсмя постоянно,
  //клбэком мы подписались на изменения которые происходят в дате
  // subscribe(() => {
  // const currentState = getCurrenState(); //как только меняются данные проверяется состояние каждой ячейки

  // далее сравнивается состояние предыдущее, которое храниться в переменной prevState(для каждой ячейки)
  //с новым состояние которое получили  при вызове функции getCurrenState()
  //и та ячейка где состояние изменилось произойдет перерисовка (render)
  // if (currentState !== prevState) {
  // render();
  // }
  // });

  const columnElement = document.createElement("td");

  render();
  return columnElement;
}
