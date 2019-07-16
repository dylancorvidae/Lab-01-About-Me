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
    const emptyString = '';

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
    const child = prompt('Does Dylan have a child to return home to? (Y/N)?');
    
    // convert to boolean
    const correct = isYes(child);

    let response = 'Thank you ' + name;

    if(correct) {
        response += ' you saved Dylan! They can return to their family and live their life again!';
    }
    else {
        response += ' for trying to save Dylan. Train harder and perhaps you can rescue them in the future.';
    }

    result.textContent = response;
};