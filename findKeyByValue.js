const findKeyByValue = function(object, searchValue) {
  for (let [key, value] of Object.entries(object)) {
    if (value === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;



//Test Cases

// const assertEqual = require('./assertEqual');

// const bestTVShowsByGenre = {
//   // eslint-disable-next-line camelcase
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);