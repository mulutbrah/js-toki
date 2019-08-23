// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const result = {};
  let max = 0;
  let maxChar = '';
  
  for(let key of str) {
    result[key] = result[key] + 1 || 1;
  }

  for(let key in result) {
    if(result[key] > max) {
      max = result[key];
      maxChar = key
    }
  }

  return maxChar;
}

module.exports = maxChar;
