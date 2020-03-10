const flatten = require('../flatten');
const assert = require('chai').assert;


describe('#flatten', () => {
  it(`should return a flat array [1, 2, 3, 4, 5, 6] for input with 1 level of nesting [1, 2, [3, 4], 5, [6]]`, () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const result = flatten(input);

    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });

  it(`should return an unchanged flat array [1, 2, 3, 4, 5, 6] for input that is already flat [1, 2, 3, 4, 5, 6]`, () => {
    const input = [1, 2, 3, 4, 5, 6];
    const result = flatten(input);

    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });

  it(`should return an empty array [] for input that is an empty array []`, () => {
    const input = [];
    const result = flatten(input);

    assert.isEmpty(result);
  });

});

