import { data, subscribe } from "./data.js";
import { Game } from "./ui/game/game.components.js";
import { Win } from "./ui/game/win/win.js";

const appElement = document.getElementById("root");

function renderApp() {
  appElement.innerHTML = "";

  if (data.win) {
    appElement.append(Win());
  } else {
    const game = Game();
    appElement.append(game);
  }
}

renderApp();
subscribe(renderApp); // callback
