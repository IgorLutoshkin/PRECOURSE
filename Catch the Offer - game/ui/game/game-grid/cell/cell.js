import { OFFER_STATUS, data } from "../../../../data.js";
import { offerCatch } from "../offer-catch/offer-catch.js";
import { offerMiss } from "../offer-miss/offer-miss.js";
import { Offer } from "../offer/offer.js";

export function Cell(x, y) {
  const columnElement = document.createElement("td");
  // columnElement.append(`x:${x} y:${y}`);
  if (x === data.x && y === data.y) {
    columnElement.append(Offer()); // добавали отрисовку оффера
  }
  if (x === data.cathOffer?.x && y === data.cathOffer?.y) {
    columnElement.append(offerCatch()); // добавали отрисовку оффера
  }
  if (x === data.missedOffer?.x && y === data.missedOffer?.y) {
    columnElement.append(offerMiss()); // добавали отрисовку оффера
  }

  return columnElement;
}
