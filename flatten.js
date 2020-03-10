const flatten = function(sourceArray) {
  let flatArray = [];
  for (let sourceElement of sourceArray) {
    if (Array.isArray(sourceElement)) {
      for (let subElement of sourceElement) {
        flatArray.push(subElement);
      }
    } else {
      flatArray.push(sourceElement);

    }
  }
  return flatArray;

};

module.exports = flatten;