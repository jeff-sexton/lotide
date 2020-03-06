const takeUntil = function(array, callback) {
  const resultArr = [];
  for (const elem of array) {
    if (callback(elem)) {
      return resultArr;
    } else {
      resultArr.push(elem);
    }

  }
};

module.exports = takeUntil;



// Test Code

// const assertArraysEqual = require('./assertArraysEqual');


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);