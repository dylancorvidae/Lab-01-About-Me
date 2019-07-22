import compareNumbers from './compareNumbers.js';

let guess = document.getElementById('guess');
let res = document.getElementById('quizRes');
let res1 = document.getElementById('quizRes1');
let triesLeft = document.getElementById('tries-left');
const lowHigh = document.getElementById('low-high');
const guessB = document.getElementById('guessButt');

const correctNum = 13;
let triesLeftNumber = 3;


guessB.addEventListener('click', function(event) {
    event.preventDefault();
    triesLeftNumber --;
    const userGuess = parseInt(guess.value);
    const result = compareNumbers(userGuess, correctNum);
    triesLeft.textContent = triesLeftNumber;

    if(triesLeftNumber === 0){
        res.textContent = 'Oh No!',
        res1.textContent = 'Gauss the goose has been degaussed.';
        triesLeft.textContent = triesLeftNumber;
        lowHigh.textContent = 'There is only one path for Gauss now, down the gullet of the goosenapper';
        guessB.disabled = true;
    }

    gameResult(result);
});

function gameResult(result) {
    if(result === 0) {
        res.textContent = 'YAY!!!';
        res1.textContent = 'Thank you so much Gauss the goose has been saved!';
        triesLeft.textContent = triesLeftNumber;
        lowHigh.textContent = 'You choose the right path!';
    }
    else if(result === -1) {
        res.textContent = 'You haven\'t found them';
        res1.textContent = 'This trail was a dead end,';
        triesLeft.textContent = triesLeftNumber;
        lowHigh.textContent = 'It\'s too dark to see down here.  Let\'s try higher up.';
    }
    else if(result === 1) {
        res.textContent = 'You haven\'t found them';
        res1.textContent = 'This trail was a dead end';
        triesLeft.textContent = triesLeftNumber;
        lowHigh.textContent = 'There is too much sun to hide. Let\'s try lower down.';
    }
}