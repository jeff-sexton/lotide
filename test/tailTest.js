const tail = require('../tail');

const assert = require('chai').assert;


describe('#tail', () => {
  it(`should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const result = tail(input);

    assert.deepEqual(result, ["Lighthouse", "Labs"]);

  });

  it(`should return an array with a length of 2 for ["Hello", "Lighthouse", "Labs"]`, () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const result = tail(input);

    assert.strictEqual(result.length, 2);

  });

  it(`should not mutate the input array for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(input);

    assert.deepEqual(input, ["Yo Yo", "Lighthouse", "Labs"]);

  });

  it(`should return an empty array [] for an array with only one element ["Yo Yo"]`, () => {
    const input = ["Yo Yo"];
    const result = tail(input);

    assert.isEmpty(result);
  });

  it(`should return an empty array [] for an empty array []`, () => {
    const input = [];
    const result = tail(input);

    assert.isEmpty(result);
  });

  it(`should return an empty array [] for input that is not an array 5`, () => {
    const input = 5;
    const result = tail(input);

    assert.isEmpty(result);
  });
});


