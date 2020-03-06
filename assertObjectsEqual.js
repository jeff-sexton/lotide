const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅👍 - Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`🔴(╯°□°）╯︵ ┻━┻ - Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }

};

module.exports = assertObjectsEqual;


//Test Code

// console.log('\nassertion 1 - should pass');
// assertObjectsEqual({},{});

// console.log('\nassertion 2 - should pass');
// assertObjectsEqual({one:1, two:2}, {two:2, one:1});

// console.log('\nassertion 3 - should fail');
// assertObjectsEqual({one:1, two:2}, {three:3, four:4});

// console.log('\nassertion 4 - should fail');
// assertObjectsEqual({one:1, two:2}, {two:2, one:'one'});


// console.log('\nassertion 5 - should pass');
// assertObjectsEqual({one:1, two:[2,2]}, {two:[2,2], one:1});

// console.log('\nassertion 6 - should fail');
// assertObjectsEqual({one:1, two:[2,2]}, {two:[2,2,2], one:1});

// console.log('\nassertion 7 - should fail');
// assertObjectsEqual({one:1, two:[2,2]}, {two:2, one:1});
