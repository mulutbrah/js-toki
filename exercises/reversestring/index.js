// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
  return str.split('').reduce((char, temp) =>  temp+char)
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {
//   let temp = ''

//   for(let char of str) {
//     temp = char + temp
//   }
//   return temp
// }