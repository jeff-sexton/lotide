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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key])) {
        if (Array.isArray(object2[key]) === false) {
          return false;

        } else if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }

    }
    return true;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅👍 - Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`🔴(╯°□°）╯︵ ┻━┻ - Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }

};

//Test Code

console.log('\nassertion 1 - should pass');
assertObjectsEqual({},{});

console.log('\nassertion 2 - should pass');
assertObjectsEqual({one:1, two:2}, {two:2, one:1});

console.log('\nassertion 3 - should fail');
assertObjectsEqual({one:1, two:2}, {three:3, four:4});

console.log('\nassertion 4 - should fail');
assertObjectsEqual({one:1, two:2}, {two:2, one:'one'});


console.log('\nassertion 5 - should pass');
assertObjectsEqual({one:1, two:[2,2]}, {two:[2,2], one:1});

console.log('\nassertion 6 - should fail');
assertObjectsEqual({one:1, two:[2,2]}, {two:[2,2,2], one:1});

console.log('\nassertion 7 - should fail');
assertObjectsEqual({one:1, two:[2,2]}, {two:2, one:1});
