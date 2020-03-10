const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe('#findKeyBuValue', () => {
  it(`should return a 'drama' for the object {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  } and searchString "The Wire"`, () => {
    const objectInput = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const searchString = "The Wire";

    const result = findKeyByValue(objectInput, searchString);

    assert.deepEqual(result, 'drama');
  });

  it(`should return a undefined for the object {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  } and searchString "That '70s Show"`, () => {
    const objectInput = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const searchString = "That '70s Show";

    const result = findKeyByValue(objectInput, searchString);

    assert.deepEqual(result, undefined);
  });


});