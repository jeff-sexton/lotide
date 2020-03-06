const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      console.log('test key:',key);
      if (Array.isArray(object1[key])) {
        if (Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        } else {
          return false;
        }
      } else if (typeof object1[key] === 'object') {
        if (typeof object2[key] === 'object') {
          console.log('recursive call');
          return eqObjects(object1[key], object2[key]);
        } else {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;

// Test Code:

// const assertEqual = require('./assertEqual');

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// //eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// //eqObjects(cd, dc); // => true
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// //eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false);


// console.log('\nrecursing needed:');

// //eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

// //eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);

// //eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);