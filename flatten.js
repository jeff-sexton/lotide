const flatten = function(sourceArray) {
  let flatArray = [];
  for (let sourceElement of sourceArray) {
    if (Array.isArray(sourceElement)) {
      for (let subElement of sourceElement) {
        flatArray.push(subElement);
      }
    } else {
      flatArray.push(sourceElement);

    }
  }
  return flatArray;

};

module.exports = flatten;


// Test Code:

// const assertArraysEqual = require('./assertArraysEqual');


// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //properly flattens 1 level of array

// assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]); //does not change already flat array

// assertArraysEqual(flatten([]), []); //returns empty array for empty array input


// assertArraysEqual([],[]);
// assertArraysEqual(["lighthouse Labs", "Bootcamp"], ["lighthouse Labs", "Bootcamp"]);
// assertArraysEqual([1, 1], [1, 2]);
// assertArraysEqual([1, 2], [2, 1]);