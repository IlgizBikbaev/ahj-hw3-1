export default function hummerClick(timerId) {

const dead = document.querySelector(".dead-hit");
const lost = document.querySelector(".miss-lost");
const fieldCells = document.querySelectorAll('.gnom');


let countDead = 0;
let countMiss = 0;

for (const fieldCell of fieldCells) {
    fieldCell.addEventListener('click', (e) => {
        e.target = target;
        if (target.className.includes('gnom-img')) {
            countDead += 1;
            dead.textContent = countDead;
        } else {
            countMiss += 1;
            lost.textContent = countLost;
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
})
}
}