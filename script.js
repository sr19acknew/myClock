setInterval(setClock, 1000);

const hrHand = document.querySelector("[data-hr-hand");
const minHand = document.querySelector("[data-min-hand");
const secHand = document.querySelector("[data-sec-hand");

function setClock() {
  const currentDate = new Date();
  const secRatio = currentDate.getSeconds() / 60;
  const minRatio = (secRatio + currentDate.getMinutes()) / 60;
  const hrRatio = (minRatio + currentDate.getHours()) / 12;
  setRotation(secHand, secRatio);
  setRotation(minHand, minRatio);
  setRotation(hrHand, hrRatio);
}
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();
