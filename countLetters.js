const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍 - Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴(╯°□°）╯︵ ┻━┻ - Assertion Failed: ${actual} != ${expected}`);
  }

};

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


assertEqual(countLetters('LHL')['l'], 2);
assertEqual(countLetters('LHL')['h'], 1);

console.log(countLetters('LHL'));

console.log(countLetters("lighthouse in the house"));

