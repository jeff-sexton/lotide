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

assertArraysEqual(letterPositions("hello")['h'], [0]);
assertArraysEqual(letterPositions("hello")['e'], [1]);
assertArraysEqual(letterPositions("hello")['l'], [2, 3]);
assertArraysEqual(letterPositions("hello")['o'], [4]);

console.log(letterPositions("lighthouse in the house"));