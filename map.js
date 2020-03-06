const map = function(array, callback) {
  let resultArr = [];
  array.forEach(elm => resultArr.push(callback(elm)));

  return resultArr;
};

module.exports = map;


//Test Code

// const assertArraysEqual = require('./assertArraysEqual');

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const numbers = [1, 2, 3, 4, 5];


// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

// assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);

// assertArraysEqual(map(numbers, num => num * num), [1, 4, 9, 16, 25]);

