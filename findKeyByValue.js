const findKeyByValue = function(object, searchValue) {
  for (let [key, value] of Object.entries(object)) {
    if (value === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;