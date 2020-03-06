const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍 - Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔴(╯°□°）╯︵ ┻━┻ - Assertion Failed: ${actual} != ${expected}`);
  }

};

module.exports = assertEqual;

//Test Code


// assertEqual('identical string', 'identical string');
// assertEqual("lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);