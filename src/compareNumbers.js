function compareNumbers(guess, gaussNum) {
    if(guess === gaussNum) {
        return 0;
    }
    else if(guess < gaussNum) {
        return -1;
    }
    else (guess > gaussNum); {
        return 1;
    }
}

export default compareNumbers;