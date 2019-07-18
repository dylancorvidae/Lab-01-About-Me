//getThrowFromNumber Function
export function getThrowFromNumber(result){
    if(result === 0){
        return 'rock';
    }
    else if(result === 1){
        return 'paper';
    }
    else (result === 2);{
        return 'scissors';
    }
}

//Generate 0,1,2
// function found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getThrow() {
    const resultNum = Math.floor(Math.random() * Math.floor(3));
    const result = getThrowFromNumber(resultNum);
    return result;
}


export default getThrow;
