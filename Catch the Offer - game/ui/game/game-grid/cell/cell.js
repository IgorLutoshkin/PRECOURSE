import { OFFER_STATUS, data } from "../../../../data.js";
import { offerCatch } from "../offer-catch/offer-catch.js";
import { offerMiss } from "../offer-miss/offer-miss.js";
import { Offer } from "../offer/offer.js";

export function Cell(x, y) {
  const columnElement = document.createElement("td");
  // columnElement.append(`x:${x} y:${y}`);
  if (OFFER_STATUS.offer === data.status && x === data.x && y === data.y) {
    columnElement.append(Offer()); // добавали отрисовку оффера
  }
  if (OFFER_STATUS.cath === data.status && x === data.x && y === data.y) {
    columnElement.append(offerCatch()); // добавали отрисовку оффера
  }
  if (OFFER_STATUS.miss === data.status && x === data.x && y === data.y) {
    columnElement.append(offerMiss()); // добавали отрисовку оффера
  }

  return columnElement;
}
