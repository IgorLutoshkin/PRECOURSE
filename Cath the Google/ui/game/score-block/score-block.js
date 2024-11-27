import { EVENTS, getScore, subscribe } from "../../../data.js";

export function scoreBlock() {
  const scoreBlockElement = document.createElement("div");

  let prevState = {};

  subscribe(EVENTS.SCORE_CHANGED, () => {render()});

  function render() {

    
    scoreBlockElement.innerHTML = "";
    scoreBlockElement.append(
      `Player1:${getScore().playerPoints1} Player2: ${getScore().playerPoints2}`
    );
    prevState = {
      player1: getScore().playerPoints1,
      player2: getScore().playerPoints2,
    };
  }

  render();
  return scoreBlockElement;
}
