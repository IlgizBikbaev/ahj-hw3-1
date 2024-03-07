/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/field.js
class FieldGame {
  paintGnom() {
    const img = document.createElement("img");
    img.classList.add("gnom-img");
    const fieldCells = document.querySelectorAll(".gnom");
    for (const fieldCell of fieldCells) {
      if (fieldCell.firstElementChild) {
        fieldCell.firstElementChild.remove();
      }
    }
    const rookieGnom = Math.floor(Math.random() * fieldCells.length);
    fieldCells[rookieGnom].append(img);
  }
}
;// CONCATENATED MODULE: ./src/js/counter.js
function hummerClick(timerId) {
  const dead = document.querySelector(".hit-dead");
  const lost = document.querySelector(".miss-lost");
  const fieldCells = document.querySelectorAll(".gnom");
  let countDead = 0;
  let countMiss = 0;
  for (const fieldCell of fieldCells) {
    fieldCell.addEventListener("click", e => {
      if (e.target.className.includes("gnom-img")) {
        countDead += 1;
        dead.textContent = countDead;
      } else {
        countMiss += 1;
        lost.textContent = countMiss;
      }
      if (countDead === 10) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert("Вы выиграли!");
      }
      if (countMiss === 5) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert("Вы проиграли!");
        clearTimeout(timerId);
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  const play = new FieldGame(document.querySelector(".gnom-game"));
  const timerId = setInterval(play.paintGnom, 1000);
  hummerClick(timerId);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;