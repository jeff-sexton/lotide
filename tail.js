const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;


// Test Code:

// const assertEqual = require('./assertEqual');

// //Test Case 1
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// console.log('----\n');

// //Test Case 2
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// console.log('----\n');

// //Test Case 3
// const oneElement = ["Yo Yo"];
// console.log(tail(oneElement));
// assertEqual(tail(oneElement).length, 0);
// assertEqual(tail(oneElement)[0], undefined);
// console.log('----\n');

// //Test Case 4
// const empty = [];
// console.log(tail(empty));
// assertEqual(tail(empty).length, 0);
// console.log('----\n');



