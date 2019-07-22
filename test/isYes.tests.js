import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('isYes', function(assert) {
    const text = 'yes';
    const expected = true;
    const result = isYes(text);
    assert.equal(result, expected);
});
