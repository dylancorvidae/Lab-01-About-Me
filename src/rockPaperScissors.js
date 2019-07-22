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

function getThrow() {
    const resultNum = Math.floor(Math.random() * Math.floor(3));
    const result = getThrowFromNumber(resultNum);
    return result;
}

export default getThrow;