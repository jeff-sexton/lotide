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

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []


assertArraysEqual(middle([1, 2, 3]), [2]);// => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]









/* assertArraysEqual([],[]);
assertArraysEqual(["lighthouse Labs", "Bootcamp"], ["lighthouse Labs", "Bootcamp"]);
assertArraysEqual([1, 1], [1, 2]);
assertArraysEqual([1, 2], [2, 1]); */