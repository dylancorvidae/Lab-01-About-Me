/* eslint-disable no-console */
import getThrowFromNumber from './rockPaperScissors.js';

//Reference needed DOM elements
const doItButton = document.getElementById('do-it-button');
const resultImg = document.getElementById('result-img');
const message = document.getElementById('message');
const opponentThrows = document.getElementById('opponent-throws');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
//const tieCount = document.getElementById('tie-count');

// Initialization (setup, state variables)
let wins = 0;
let losses = 0;
//let ties = 0;

// Event Handlers
doItButton.addEventListener('click', () => {
    const rps = getThrowFromNumber();

    resultImg.classList.remove('invisible');
    opponentThrows.classList.remove('invisible');
    const src = 'assets/weapon/' + rps + '.png';
    resultImg.src = src;

    const throwButton = document.querySelector('input:checked');

    const won = throwButton.value === rps;

//Show Result & Tally Score
/* let result =

if(throwButton.value === 'rock' && rps === "scissors" ||
throwButton.value === 'paper' && rps === 'rock' ||
throwButton.value === 'scissors' && rps === 'paper')
return 'win';

else (throwButton.value === 'rock' && rps === "paper" ||
throwButton.value === 'paper' && rps === 'scissors' ||
throwButton.value === 'scissors' && rps === 'rock')
return 'loss'

else if(throwButton.value === 'rock' && rps === "rock" ||
throwButton.value === 'paper' && rps === 'paper' ||
throwButton.value === 'scissors' && rps === 'scissors')
return 'tie'


if(won) {
        message.textContent = 'Congratulations! You Won! Do you want to try your luck again?';
        wins++;
        winCount.textContent = wins;
    } else {
        message.textContent = 'You Lost! Want to try again?';
        losses++;
        lossCount.textContent = losses;
    } else if {
        message.textContent = 'It was a tie! Would you like to try again?';
        ties++;
        tieCount.textContent = ties;
*/

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