export const data = {
  cathPoints: 0,
  missPoints: 0,
  x: 0,
  y: 0,
  rowCount: 3,
  columnCount: 3,
};
/* здесь пишем логику */

let subscriber = null; // пустая функция, когда поменяются данные в (setInterval) она будет вызвана

// задает рандомное положение офера
function randomChangeCoordinates(num) {
  return Math.floor(Math.random() * num);
}

setInterval(() => {
  data.x = randomChangeCoordinates(data.columnCount);
  data.y = randomChangeCoordinates(data.rowCount);
  subscriber(); //после того как данные поменялись, вызываем функцию (let subscriber)
}, 1000);

// после того как пройдет сменна данных в (setInterval) и будет вызванна функция (let subscriber)
//создадим функцию которая будет принимать в себя функцию(let subscriber)
//в качестве параметра функции (subscribe) будет передана другая функция (newSubscriber)
//уже в index мы вместо (newSubscriber) положим функцию которая будет отвечать за отрисовку данных
export function subscribe(newSubscriber) {
  subscriber = newSubscriber;
}




