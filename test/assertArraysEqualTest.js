const assertArraysEqual = require('../assertArraysEqual');
// Test Code

assertArraysEqual([],[]);
assertArraysEqual(["lighthouse Labs", "Bootcamp"], ["lighthouse Labs", "Bootcamp"]);
assertArraysEqual([1, 1], [1, 2]);
assertArraysEqual([1, 2], [2, 1]);