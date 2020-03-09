const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const assert = require('chai').assert;

describe('#middle', () => {
  it('should return an empty array [] for an array of 1 element [1]', () => {
    const input = [1];
    const result = middle(input);

    assert.isEmpty(result);
  });

  it('should return an empty array [] for an array of 2 elements [1, 2]', () => {
    const input = [1, 2];
    const result = middle(input);

    assert.isEmpty(result);
  });

  it('should return the middle element [2] for an array of 3 elements [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const result = middle(input);

    assert.deepEqual(result, [2]);
  });

  it('should return the middle element [3] for an array of with an odd number of elements [1, 2, 3, 4, 5]', () => {
    const input = [1, 2, 3, 4, 5];
    const result = middle(input);

    assert.deepEqual(result, [3]);
  });
  
  it('should return the two middle elements [2, 3] for an array of with an even number of elements greater than 2 [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const result = middle(input);

    assert.deepEqual(result, [2, 3]);
  });
  
  it(`should return the two middle elements ['c', 'd'] for an array with an even number of elements greater than 4 ['a', 'b', 'c', 'd', 'e', 'f']`, () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f'];
    const result = middle(input);

    assert.deepEqual(result, ['c', 'd']);
  });

  it(`should return the two middle elements [['c', 'd'], 'e'] for an array with an even number of elements greater than 4 with nested arrays ['a', 'b', ['c', 'd'], 'e', 'f', 'g']`, () => {
    const input = ['a', 'b', ['c', 'd'], 'e', 'f', 'g'];
    const result = middle(input);

    assert.deepEqual(result, [['c', 'd'], 'e']);
  });

  
});