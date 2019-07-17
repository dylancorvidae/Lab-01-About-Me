const gaussNum = 13

function whichTrail(guess) {
    if(guess === gaussNum) {
        return 0;
    }
    else if(guess < 13) {
        return -1;
    }
    else (guess > 13) {
        return 1;
    }
}

export default whichTrail;