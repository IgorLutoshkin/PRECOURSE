import { subscribe } from "./data.js";
import { Game } from "./ui/game/game.components.js";

const appElement = document.getElementById("root");

function renderApp() {
  const game = Game();
  appElement.innerHTML = "";
  appElement.append(game);
}

subscribe(renderApp); // callback
