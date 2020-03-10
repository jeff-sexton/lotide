const letterPositions = function(sentence) {
  const results = {};
  let lowerString = sentence.toLowerCase();

  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i] !== ' ') {
      if (results[lowerString[i]]) {
        results[lowerString[i]].push(i);
      } else {
        results[lowerString[i]] = [i];
      }
    }
  }
  
  return results;
};

console.log(letterPositions(' lighthouse in the house '));
module.exports = letterPositions;