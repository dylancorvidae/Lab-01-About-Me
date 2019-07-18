/* eslint-disable no-console */
import getThrowFromNumber from './rockPaperScissors.js';

//Reference needed DOM elements
const doItButton = document.getElementById('do-it-button');
const resultImg = document.getElementById('result-img');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

// Initialization (setup, state variables)
let wins = 0;
let losses = 0;

// Event Handlers
doItButton.addEventListener('click', () => {
    const rps = getThrowFromNumber();

    resultImg.classList.remove('invisible');
    const src = 'assets/weapon/' + rps + '.png';
    resultImg.src = src;

    const sideButton = document.querySelector('input:checked');

    const won = sideButton.value === rps;

//Show Result & Tally Score
    if(won) {
        message.textContent = 'Congratulations! You Won! Do you want to try your luck again?';
        wins++;
        winCount.textContent = wins;
    } else {
        message.textContent = 'You Lost! Want to try again?';
        losses++;
        lossCount.textContent = losses;
    }
});