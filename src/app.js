/* eslint-disable no-console */
import isYes from './is-yes.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quizButt');
const result = document.getElementById('quizResult');

// Initialization (setup, state variables)

// Event Handlers
quizButton.onclick = function() {
    // show the user a message. only options is "OK"
    alert('I am trapped in the computer! I want to get back to my life. To free me you must answer all questions correctly. -Dylan');
    
    // returns: true for "OK", and false for "Cancel"
    const confirmed = confirm('Do you want to save Dylan?');
    if(confirmed === false) {
        return;
    }
    
    // example of what an empty string is
    // eslint-disable-next-line no-unused-vars

    let name = '';
    
    // returns string entered by user, unless they cancel
    // in which case returns null
    const firstName = prompt('What\'s your first name?');
    name = name + firstName;
    // short hand for above:
    // name += firstName;

    const lastName = prompt('What\'s your last name?');
    name = name + ' ' + lastName;
    // short hand for above:
    // name += lastName;

    // get the text response from the user
    const child = prompt('Does Dylan have a child to return home to? (Y/N)');
    
    // convert to boolean
    let correct = isYes(child);

    let correctAnswers = 0;
    if(correct === true) {
        (correctAnswers += 1);
    } 

    // get the text response from the user
    const teeterMetal = prompt('Dylan has many interesting skills. Is Dylan the first black metal teeter board artist? (Y/N)');
    
    // convert to boolean
    correct = isYes(teeterMetal);
    if(correct === true) {
        (correctAnswers += 1);
    // get the text response from the user
    const catName = prompt('Does Dylan have a cat named Lovecraft? (Y/N)');
    
    // convert to boolean
    correct = isYes(catName);
    if(correct === true) {
        (correctAnswers += 1);

    //Responses to quiz
    let response = 'Thank you ' + name;

    if(correctAnswers === 3) {
        response += ', you got' + correctAnswers + ' out of 3 questions correct and have saved Dylan! They can return to their family and live their life again!';
    }
    else {
        response += ' for trying to save Dylan. You got' + correctAnswers + ' out of 3 questions correct. Please go back to train and perhaps you can rescue them in the future.';
    }

    result.textContent = response;
};