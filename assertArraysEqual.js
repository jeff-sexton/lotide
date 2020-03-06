const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅👍 - Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴(╯°□°）╯︵ ┻━┻ - Assertion Failed: ${actual} != ${expected}`);
  }

};

module.exports = assertArraysEqual;

// Test Code

// assertArraysEqual([],[]);
// assertArraysEqual(["lighthouse Labs", "Bootcamp"], ["lighthouse Labs", "Bootcamp"]);
// assertArraysEqual([1, 1], [1, 2]);
// assertArraysEqual([1, 2], [2, 1]);