import { gameGrid } from "./game-grid/game-grid.js";
import { scoreBlock } from "./score-block/score-block.js";
import { settingsPanel } from "./settings-panel/settings-panel.js";

export function Game() {
  const gameElement = document.createElement("div");
  gameElement.append(settingsPanel(), scoreBlock(), gameGrid());
  return gameElement;
}
