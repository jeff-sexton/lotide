const without = function(sourceArray, itemsToRemoveArray) {
  let resultArray = [];
  for (let element of sourceArray) {
    if (itemsToRemoveArray.includes(element) === false) {
      resultArray.push(element);
    }
  }
  return resultArray;
};

module.exports = without;


// Test Code:

// const assertArraysEqual = require('./assertArraysEqual');

// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// //ensure the source array is not modified
// let testCase = ["1", "2", "3"];
// without(["1", "2", "3"], [1, 2, "3"]);
// assertArraysEqual(testCase, ["1", "2", "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
