import { getThrowFromNumber } from '../src/rockPaperScissors.js';

const test = QUnit.test;

test('getThrowFromNumber', function(assert){
    const number = 0;
    const expected = 'rock';
    const result = getThrowFromNumber(number);
    assert.equal(result, expected);
});

test('getThrowFromNumber', function(assert){
    const number = 1;
    const expected = 'paper';
    const result = getThrowFromNumber(number);
    assert.equal(result, expected);
});

test('getThrowFromNumber', function(assert){
    const number = 2;
    const expected = 'scissors';
    const result = getThrowFromNumber(number);
    assert.equal(result, expected);
});