const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return array.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return array.slice(middleIndex, middleIndex + 1);
    }
  }

};

module.exports = middle;

// Test Code:

// const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []


// assertArraysEqual(middle([1, 2, 3]), [2]);// => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
