const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅👍 - Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴(╯°□°）╯︵ ┻━┻ - Assertion Failed: ${actual} != ${expected}`);
  }

};

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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //properly flattens 1 level of array

assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]); //does not change already flat array

assertArraysEqual(flatten([]), []); //returns empty array for empty array input


/* assertArraysEqual([],[]);
assertArraysEqual(["lighthouse Labs", "Bootcamp"], ["lighthouse Labs", "Bootcamp"]);
assertArraysEqual([1, 1], [1, 2]);
assertArraysEqual([1, 2], [2, 1]); */