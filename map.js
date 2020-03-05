

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


const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  let resultArr = [];
  array.forEach(elm => resultArr.push(callback(elm)));

  return resultArr;
};



//Test Code

const results1 = map(words, word => word[0]);
console.log(results1);

const numbers = [1, 2, 3, 4, 5];


assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);

assertArraysEqual(map(numbers, num => num * num), [1, 4, 9, 16, 25]);

