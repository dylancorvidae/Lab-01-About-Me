import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('compareNumbers', function(assert){
    //Arrange
    const guess = 13;
    const gaussNum = 13;
    const expected = 0;
    
    // Act
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, gaussNum);

    //Assert
    assert.equal(result, expected);
});