import {
  getGameStatus,
  Down1,
  Left1,
  Right1,
  subscribe,
  Up1,
  OFFER_STATUS,
  Up2,
  Down2,
  Left2,
  Right2,
  EVENTS,
  start,
  setSystemGameMode,
  GAME_SYSTEM_MODE,
} from "./data.js";
import { Game } from "./ui/game/game.components.js";
import { Win } from "./ui/game/win/win.js";

const appElement = document.getElementById("root");

function renderApp() {
  subscribe(EVENTS.GAME_STATUS_CHANGED, () => {
    render();
  });

  function render() {
    appElement.innerHTML = "";
    if (getGameStatus() === OFFER_STATUS.win) {
      const win = Win();
      appElement.append(Win());
    } else {
      const game = Game();
      appElement.append(game);
    }
  }
  setSystemGameMode(GAME_SYSTEM_MODE.ONLY_CLIENT)
  start();
  render();
}

renderApp();
//subscribe(renderApp); // callback

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
      Up1();
      break;
    case "KeyS":
      Down1();
      break;
    case "KeyA":
      Left1();
      break;
    case "KeyD":
      Right1();
      break;

    case "ArrowUp":
      Up2();
      break;
    case "ArrowDown":
      Down2();
      break;
    case "ArrowLeft":
      Left2();
      break;
    case "ArrowRight":
      Right2();
      break;

    default:
      break;
  }
});
