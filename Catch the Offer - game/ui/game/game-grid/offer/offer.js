import { cathPoints } from "../../../../data.js";

export function Offer() {
  const offerElement = document.createElement("img");
  offerElement.src = "../../../../image/offer.png";

  offerElement.addEventListener("click", cathPoints);

  return offerElement;
}
