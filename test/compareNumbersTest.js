import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('compareNumbers', function(assert){
    const guess = 13;
    const gaussNum = 13;
    const expected = 0;
    const result = compareNumbers(guess, gaussNum);
    assert.equal(result, expected);
});