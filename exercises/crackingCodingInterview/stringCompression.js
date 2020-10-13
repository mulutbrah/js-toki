/*
    Implement a method to perform basic string compression using the counts of repeated characters. 
    For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller 
    than the original string, your method should return the original string. 
    You can assume the string has only uppercase and lowercase letters (a - z)
*/

function stringCompression(string) {
  let currentChar = string[0];
  let count = 0;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== currentChar) {
      result += currentChar + count;
      currentChar = string[i];
      count = 1;
    } else {
      count++;
    }
  }

  if (count !== 1) {
    result += currentChar + count;
    currentChar = string[0];
    count = 0;
  }

  return result;
}

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("aaafsfbccccsscaaa"));
