import {FieldGame} from './field.js';
import hummerClick from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
    const play = new FieldGame(document.querySelector('.gnom-game'));

    const timerId = setInterval(play.paintGnom, 1000);
    
    hummerClick(timerId);
});