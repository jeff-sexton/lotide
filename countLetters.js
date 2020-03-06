const countLetters = function(sentence) {
  let lowerString = sentence.toLowerCase();
  let countObject = {};

  for (let letter of lowerString) {
    if (letter !== ' ') {
      if (countObject[letter]) {
        countObject[letter] += 1;
      } else {
        countObject[letter] = 1;
      }
    }
  }

  return countObject;

};

module.exports = countLetters;

// Test Code
// const assertEqual = require('./assertEqual.js');

// assertEqual(countLetters('LHL')['l'], 2);
// assertEqual(countLetters('LHL')['h'], 1);

// console.log(countLetters('LHL'));

// console.log(countLetters("lighthouse in the house"));

