import isYes from './is-yes.js';

const quizButton = document.getElementById('quizButt');
const result = document.getElementById('quizResult');

quizButton.onclick = function() {
    
    alert('I am trapped in the computer! I want to get back to my life. To free me you must answer all questions correctly. -Dylan');
    
    const confirmed = confirm('Do you want to save Dylan?');
    if(confirmed === false) {
        return;
    }

    let name = '';

    const firstName = prompt('What\'s your first name?');
    name = name + firstName;

    const lastName = prompt('What\'s your last name?');
    name = name + ' ' + lastName;

    const child = prompt('Does Dylan have a child to return home to? (Y/N)');
    
    let correctAnswers = 0;

    if(isYes(child) === true) {
        correctAnswers += 1;
    } 

    const teeterMetal = prompt('Dylan has many interesting skills. Is Dylan the first black metal teeter board artist? (Y/N)');
    
    if(isYes(teeterMetal) === false) {
        correctAnswers += 1;
    }

    const catName = prompt('Does Dylan have a cat named Lovecraft? (Y/N)');
    
    if(isYes(catName) === false) {
        correctAnswers += 1;
    }

    let response = 'Thank you ' + name;

    if(correctAnswers === 3) {
        response += ', you got ' + correctAnswers + ' out of 3 questions correct and have saved Dylan! They can return to their family and live their life again!';
    }
    else {
        response += ' for trying to save Dylan. You got ' + correctAnswers + ' out of 3 questions correct. Please go back to train and perhaps you can rescue them in the future.';
    }
    result.textContent = response;
};