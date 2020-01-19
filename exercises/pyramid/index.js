// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' // i=j
//   pyramid(2)
//       ' # ' //i 2
//       '###' //j === n-1 2 -> 3
//   pyramid(3)
//       '  #  '
//       ' ### ' j === 1 || j === 3 i === 1
//       '#####' 3 -> 5

function pyramid(n) {
  let star = "";

  for (let i = 1; i <= n; i++) {
    star = "";
    for (let j = 1; j <= n * 2 - 1; j++) {
      j >= n + 1 - i && j <= n - 1 + i ? (star += "*") : (star += " ");
    }
    console.log(star);
  }
}

module.exports = pyramid;
