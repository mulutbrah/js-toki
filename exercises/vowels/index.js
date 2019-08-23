// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aiueo]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   const vowelCollection = ['a', 'i', 'u', 'e', 'o'];
//   let count = 0

//   for(let char of str.toLowerCase()) {
//     if(vowelCollection.includes(char)) {
//       count++
//     }
//   }

//   return count
// }