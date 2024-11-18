const data = {
  cathPoints: 0,
  missPoints: 0,
  x: 0,
  y: 0,
  rowCount: 5, //
  columnCount: 5, //
  winPoints: 5,
  win: false,
  players: [
    { x: 0, y: 1, points: 0 }, //green
    { x: 1, y: 1, points: 0 }, //red
  ],
};

export const OFFER_STATUS = {
  win: "win",
  in_progress: "in_progress",
};

/* здесь пишем логику */

let subscriber = null; // пустая функция, когда поменяются данные в (setInterval) она будет вызвана

// задает рандомное положение офера
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}
//эта функция меят так координаты ,чтобы оффер не попадал в одну и ту же ячейку
function changeGoogleCoordinates() {
  let newX = 0;
  let newY = 0;
  let newCoordinates;
  do {
    newX = randomNumber(data.columnCount);
    newY = randomNumber(data.rowCount);
    newCoordinates = newX === data.x && newY === data.y;
  } while (newCoordinates || !isCellOfGridIsFree(newX, newY));

  data.x = newX;
  data.y = newY;
}

// айдишник для  setInterval
let googleSetIntervalId = null;
//меняем данные (вернее вызываем функцию) каждую секунду
function runGoogleJumpSetinterval() {
  clearInterval(googleSetIntervalId);
  googleSetIntervalId = setInterval(missGoogle, 1000);
}
runGoogleJumpSetinterval(); // нужно вызвать функцию иначе порграмма начнет работать только после клика по офферу

// после того как пройдет сменна данных в (setInterval) и будет вызванна функция (let subscriber)
//создадим функцию которая будет принимать в себя функцию(let subscriber)
//в качестве параметра функции (subscribe) будет передана другая функция (newSubscriber)
//уже в index мы вместо (newSubscriber) положим функцию которая будет отвечать за отрисовку данных
export function subscribe(newSubscriber) {
  subscriber = newSubscriber;
}

//увеличиваем счетчик пойманных офферов
function cathGoogle(player) {
  player.points++;
  if (data.winPoints === player.points) {
    clearInterval(googleSetIntervalId);
    data.win = true;
  } else {
    changeGoogleCoordinates();
    runGoogleJumpSetinterval();
  }

  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}

//увеличиваем счетчик непойманных офферов за счет того что каждую секунду тикает счетчик
function missGoogle() {
  data.missPoints++;

  changeGoogleCoordinates();
  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}

//перезапуск приложения
export function restart() {
  data.cathPoints = 0;
  data.missPoints = 0;
  data.x = 0;
  data.y = 0;
  data.win = false;
  runGoogleJumpSetinterval();
  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}

/*add coment*/
function movePlayer(delta, player) {
  let newX = player.x + delta.x;
  let newY = player.y + delta.y;

  if (!isNewCoordInsideGrid(newX, newY)) return;
  if (!isCellOfGridIsFree(newX, newY)) return;

  player.x = newX;
  player.y = newY;

  if (player.x === data.x && player.y === data.y) {
    cathGoogle(player);
  }
  subscriber();
}

function isNewCoordInsideGrid(x, y) {
  if (x < 0 || y < 0 || x >= data.columnCount || y >= data.rowCount)
    return false;

  return true;
}
function isCellOfGridIsFree(newX, newY) {
  if (newX === data.players[0].x && newY === data.players[0].y) return false;
  if (newX === data.players[1].x && newY === data.players[1].y) return false;
  return true;
}

//*************************************************
//setter//reducer
export function Up1() {
  movePlayer({ x: 0, y: -1 }, data.players[0]);
}
export function Down1() {
  movePlayer({ x: 0, y: 1 }, data.players[0]);
}
export function Left1() {
  movePlayer({ x: -1, y: 0 }, data.players[0]);
}
export function Right1() {
  movePlayer({ x: 1, y: 0 }, data.players[0]);
}
//***
export function Up2() {
  movePlayer({ x: 0, y: -1 }, data.players[1]);
}
export function Down2() {
  movePlayer({ x: 0, y: 1 }, data.players[1]);
}
export function Left2() {
  movePlayer({ x: -1, y: 0 }, data.players[1]);
}
export function Right2() {
  movePlayer({ x: 1, y: 0 }, data.players[1]);
}

//getter

export function getGooglePosition() {
  return {
    x: data.x,
    y: data.y,
  };
}
export function getPlayer1Position() {
  return {
    x: data.players[0].x,
    y: data.players[0].y,
  };
}
export function getPlayer2Position() {
  return {
    x: data.players[1].x,
    y: data.players[1].y,
  };
}
export function getSettings() {
  return {
    rowCount: data.rowCount,
    columnCount: data.columnCount,
  };
}

export function getGameStatus() {
  if (data.win) return OFFER_STATUS.win;
  else return OFFER_STATUS.in_progress;
}

export function getScore() {
  return {
    playerPoints1: data.players[0].points,
    playerPoints2: data.players[1].points,
  };
}
