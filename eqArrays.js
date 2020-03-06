const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i])) {
        if (Array.isArray(array2[i])) {
          return eqArrays(array1[i], array2[i]);
        } else {
          return false;
        }

      } else if (array1[i] !== array2[i]) {
        return false;

      }
    }
  }

  return true;
};

module.exports = eqArrays;



//Test Code

// const assertEqual = require('./assertEqual');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false





// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual(eqArrays([1, [2, 3], 3], [1, [2, 3], 3]), true);

// assertEqual(eqArrays([1, [2, 3, 4], 3], [1, [2, 3, 4, 5], 3]), false);

// assertEqual(eqArrays([1, [2, 3], 3], [1, 2, 3]), false);