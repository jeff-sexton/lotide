const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe('#eqArrays', () => {
  it(`should return true when two equal arrays are input [1, 2, 3], [1, 2, 3]`, () => {
    const input1 = [1, 2, 3];
    const input2 = [1, 2, 3];
    const result = eqArrays(input1, input2);

    assert.deepEqual(result, true);
  });

  it(`should return false when two different arrays are input [1, 2, 3], [3, 2, 1]`, () => {
    const input1 = [1, 2, 3];
    const input2 = [3, 2, 1];
    const result = eqArrays(input1, input2);

    assert.deepEqual(result, false);
  });

  it(`should return true when two equal arrays are input ["1", "2", "3"], ["1", "2", "3"]`, () => {
    const input1 = ["1", "2", "3"];
    const input2 = ["1", "2", "3"];
    const result = eqArrays(input1, input2);

    assert.deepEqual(result, true);
  });


  it(`should return true when two equal arrays are input with 1 layer of nested arrays [1, [2, 3], 3], [1, [2, 3], 3]`, () => {
    const input1 = [1, [2, 3], 3];
    const input2 = [1, [2, 3], 3];
    const result = eqArrays(input1, input2);

    assert.deepEqual(result, true);
  });



});
