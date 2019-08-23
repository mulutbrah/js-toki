// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const temp = []
  
  for(let word of str.split(' ')) {
    temp.push(word[0].toUpperCase() + word.slice(1))
  }

  return temp.join(' ');
}

// function capitalize(str) {
//   const temp = []
//   str.split(' ').forEach(el => {
//     el = el[0].toUpperCase() + el.slice(1)
//     temp.push(el)
//   } )
//   return temp.join(' ');
// }

module.exports = capitalize;
