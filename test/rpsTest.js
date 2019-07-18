import { getThrowFromNumber } from '../src/rockPaperScissors.js';

const test = QUnit.test;

test('getThrowFromNumber', function(assert){

    //Arrange
    const number = 0;
    const expected = 'rock';

    //Act
    //Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});

test('getThrowFromNumber', function(assert){

    //Arrange
    const number = 1;
    const expected = 'paper';

    //Act
    //Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});

test('getThrowFromNumber', function(assert){

    //Arrange
    const number = 2;
    const expected = 'scissors';

    //Act
    //Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});