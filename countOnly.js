// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (Object.hasOwnProperty.call(results, item)) {
        results[item] += 1; //Add to count
      } else {
        results[item] = 1; //initilize key and value count
      }
    }
  }
  return results;
};

module.exports = countOnly;