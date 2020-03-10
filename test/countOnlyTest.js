const countOnly = require('../CountOnly');
const assert = require('chai').assert;


describe('#countOnly', () => {
  it(`should return 
    {
      Jason: 1,
      Fang: 2
    };
    
    given an input array of 
    [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
    ] 
    and a count object of 
    { "Jason": true, "Karima": true, "Fang": true }`, () => {
    
    const inputArray = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const countObj = { "Jason": true, "Karima": true, "Fang": true };

    const expectedResult = {
      Jason: 1,
      Fang: 2
    };

    const result = countOnly(inputArray, countObj);

    assert.deepEqual(result, expectedResult);
  });

  it(`should return 
    {
      Jason: 1,
      Fang: 2,
      Joe: 1
    };
    
    given an input array of 
    [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
    ] 
    and a count object of 
    { "Jason": true, "Karima": true, "Fang": true, "Joe": true }`, () => {
    
    const inputArray = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const countObj = { "Jason": true, "Karima": true, "Fang": true, "Joe": true };

    const expectedResult = {
      Jason: 1,
      Fang: 2,
      Joe: 1
    };

    const result = countOnly(inputArray, countObj);

    assert.deepEqual(result, expectedResult);
  });


});