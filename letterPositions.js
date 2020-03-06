const letterPositions = function(sentence) {
  const results = {};
  let lowerString = sentence.toLowerCase();

  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i] !== ' ') {
      if (results[lowerString[i]]) {
        results[lowerString[i]].push(i);
      } else {
        results[lowerString[i]] = [i];
      }
    }
  }
  
  return results;
};



// Test Code

// const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(letterPositions("hello")['h'], [0]);
// assertArraysEqual(letterPositions("hello")['e'], [1]);
// assertArraysEqual(letterPositions("hello")['l'], [2, 3]);
// assertArraysEqual(letterPositions("hello")['o'], [4]);

// console.log(letterPositions("lighthouse in the house"));