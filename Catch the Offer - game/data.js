export const OFFER_STATUS = {
  offer: "offer",
  cath: "cath",
  miss: "miss",
};

export const data = {
  cathPoints: 0,
  missPoints: 0,
  x: 0,
  y: 0,
  missedOffer: null,
  cathOffer: null,
  rowCount: 3, //
  columnCount: 3, //
  winPoints: 5,
  win: false,
  status: OFFER_STATUS.offer,
};

/* здесь пишем логику */

let subscriber = null; // пустая функция, когда поменяются данные в (setInterval) она будет вызвана

// задает рандомное положение офера
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}
//эта функция меят так координаты ,чтобы оффер не попадал в одну и ту же ячейку
function changeOfferCoordinates() {
  let newX = 0;
  let newY = 0;
  let newCoordinates;
  do {
    newX = randomNumber(data.columnCount);
    newY = randomNumber(data.rowCount);
    newCoordinates = newX === data.x && newY === data.y;
  } while (newCoordinates);

  data.x = newX;
  data.y = newY;
}

// айдишник для  setInterval
let setIntervalId = null;
//меняем данные (вернее вызываем функцию) каждую секунду
function runJumpSetinterval() {
  clearInterval(setIntervalId);
  setIntervalId = setInterval(missPoints, 1000);
}
runJumpSetinterval(); // нужно вызвать функцию иначе порграмма начнет работать только после клика по офферу

// после того как пройдет сменна данных в (setInterval) и будет вызванна функция (let subscriber)
//создадим функцию которая будет принимать в себя функцию(let subscriber)
//в качестве параметра функции (subscribe) будет передана другая функция (newSubscriber)
//уже в index мы вместо (newSubscriber) положим функцию которая будет отвечать за отрисовку данных
export function subscribe(newSubscriber) {
  subscriber = newSubscriber;
}

//увеличиваем счетчик пойманных офферов
export function cathPoints() {
  data.cathPoints++;
  if (data.winPoints === data.cathPoints) {
    clearInterval(setIntervalId);
    data.win = true;
  } else {
    setCaughtOffer(data.x, data.y);
  setTimeout(() => {
    clearCaughtOffer();
    subscriber();
  }, 200);
    changeOfferCoordinates();
    runJumpSetinterval();
  }

  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}

//увеличиваем счетчик непойманных офферов за счет того что каждую секунду тикает счетчик
function missPoints() {
  data.missPoints++;
  setMissedOffer(data.x, data.y);
  setTimeout(() => {
    clearMissedOffer();
    subscriber();
  }, 200);
  changeOfferCoordinates();
  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}

//перезапуск приложения
export function restart() {
  data.cathPoints = 0;
  data.missPoints = 0;
  data.x = 0;
  data.y = 0;
  data.win = false;
  runJumpSetinterval();
  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}

export function catchOffer() {
  setTimeout(() => {
    OFFER_STATUS.cath = data.status;
    subscriber();
  }, 200);
}
////////////////////////////////////////////

function setMissedOffer(x, y) {
  data.missedOffer = { x, y };
}
function clearMissedOffer(x, y) {
  data.missedOffer = null;
}

function setCaughtOffer(x, y) {
  data.cathOffer = { x, y };
}
function clearCaughtOffer(x, y) {
  data.cathOffer = null;
}
