/* eslint-disable no-console */
import compareNumbers from './compareNumbers.js';

// Reference needed DOM elements
const guess = document.getElementById('inputGuess');


// Initialization (setup, state variables)
const gaussNum = 13
let triesLeft = 3


// Event Handlers
inputGuess.onclick(guessButt)


// Track tries somehow


//Responses to quiz

    //correct response 1st
if (compareNumbers === 0) {
    quizRes1 += 'Thank you so much Gauss the goose has been saved!';
    quizRes += 'YAY!!!'
    }
    //too low, should give message to try higher and update # tries
    else if (compareNumbers === -1) {
    quizRes1 += 'This trail was a dead end,' 
        //update lowHigh span
            // lowHigh = "It's too dark to well down here.  Let's try higher up."
        //update triesLeft span 
            //triesLeft = triesLeft - 1;
    }
    //too high, should give message to try lower and update # tries
    else (compareNumbers === 1); {
        quizRes1 += 'This trail was a dead end'
        //update lowHigh span
            // lowHigh = 'There is too much sun to hide. Let's try lower down.'
        //update triesLeft span 
            //triesLeft = triesLeft - 1;
    }
};

//What to do if out of tries run out

    if (triesLeft === 0){
        quizRes += 'Oh No!',
        quizRes1 += 'Gauss the goose has been degaussed.'
    };

            //     let response = 'Thank you ' + name;

            //     if(correctAnswers === 3) {
            //         response += ', you got ' + correctAnswers + ' out of 3 questions correct and have saved Dylan! They can return to their family and live their life again!';
            //     }
            //     else {
            //         response += ' for trying to save Dylan. You got ' + correctAnswers + ' out of 3 questions correct. Please go back to train and perhaps you can rescue them in the future.';
            //     }

            //     result.textContent = response;
            // };

