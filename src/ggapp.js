/* eslint-disable no-console */
import compareNumbers from './compareNumbers.js';

// Reference needed DOM elements
let guess = document.getElementById('guess');
const res = document.getElementById('quizRes');
const res1 = document.getElementById('quizRes1');
let triesLeft = document.getElementById('tries-left');
const lowHigh = document.getElementById('low-high');
const guessB = document.getElementById('guessButt');


// Initialization (setup, state variables)
const correctNum = 13;
let triesLeftNumber = 3;


// Event Handlers
guessB.addEventListener('click', function(event) {
    event.preventDefault();
    triesLeft --;
    const userGuess = parseInt(guess.value);
    const result = compareNumbers(userGuess, correctNum);
    triesLeft = triesLeftNumber.textContent('' + triesLeftNumber + '');

    if(result === 0) {
        res.textContent = 'YAY!!!';
        res1.textContent = 'Thank you so much Gauss the goose has been saved!';
    }
    //too low, should give message to try higher and update # tries
    else if(result === -1) {
        res.textContent = 'You haven\'t found them';
        res1.textContent = 'This trail was a dead end,';
        //update lowHigh span
            // lowHigh = "It's too dark to see down here.  Let's try higher up."
        
    }
    //too high, should give message to try lower and update # tries
    else (result === 1); {
        res.textContent = 'You haven\'t found them';
        res1.textContent = 'This trail was a dead end';
        //update lowHigh span
            // lowHigh = 'There is too much sun to hide. Let's try lower down.'
        
    }
});




//Responses to quiz

    //correct response 1st


//What to do if out of tries run out

if(triesLeft === 0){
    res.textContent = 'Oh No!',
    res1.textContent = 'Gauss the goose has been degaussed.';
}
