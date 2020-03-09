const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//Test Code

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false





assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, [2, 3], 3], [1, [2, 3], 3]), true);

assertEqual(eqArrays([1, [2, 3, 4], 3], [1, [2, 3, 4, 5], 3]), false);

assertEqual(eqArrays([1, [2, 3], 3], [1, 2, 3]), false);