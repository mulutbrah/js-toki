/*
    Design an algorithm to figure out if someone has won a game of tic-tac-toe.
*/

function ticTacWin(board) {
  const winner = [];
  let i = 0;
  let j = 0;

  while (i < 3 && j < 3) {
    if (
      j === 0 &&
      table[i][j] &&
      table[i][j + 1] &&
      table[i][j + 1] === table[i][j] &&
      table[i][j + 2] &&
      table[i][j + 2] === table[i][j]
    ) {
      !winner.includes(table[i][j]) && winner.push(table[i][j]);
    }

    if (
      j === 1 &&
      table[i][j] &&
      table[i][j - 1] &&
      table[i][j - 1] === table[i][j] &&
      table[i][j + 1] &&
      table[i][j + 1] === table[i][j]
    ) {
      !winner.includes(table[i][j]) && winner.push(table[i][j]);
    }

    if (
      j === 2 &&
      table[i][j] &&
      table[i][j - 1] &&
      table[i][j - 1] === table[i][j] &&
      table[i][j - 2] &&
      table[i][j - 2] === table[i][j]
    ) {
      !winner.includes(table[i][j]) && winner.push(table[i][j]);
    }

    if (
      i === 0 &&
      table[i][j] &&
      table[i + 1][j] &&
      table[i + 1][j] === table[i][j] &&
      table[i + 2][j] &&
      table[i + 2][j] === table[i][j]
    ) {
      !winner.includes(table[i][j]) && winner.push(table[i][j]);
    }

    if (
      i === 1 &&
      table[i][j] &&
      table[i - 1][j] &&
      table[i - 1][j] === table[i][j] &&
      table[i + 1][j] &&
      table[i + 1][j] === table[i][j]
    ) {
      !winner.includes(table[i][j]) && winner.push(table[i][j]);
    }

    if (
      i === 2 &&
      table[i][j] &&
      table[i - 1][j] &&
      table[i - 1][j] === table[i][j] &&
      table[i - 2][j] &&
      table[i - 2][j] === table[i][j]
    ) {
      !winner.includes(table[i][j]) && winner.push(table[i][j]);
    }

    if (j < 2) {
      j += 1;
    } else {
      j = 0;
      i += 1;
    }
  }

  if (winner.length === 1) {
    return winner[0];
  } else if (winner.includes(0) || winner[0] === 0) {
    return -1;
  } else {
    return 0;
  }
}

// console.log(
//   ticTacWin([
//     ["x", " ", "O"],
//     [" ", " ", "O"],
//     ["x", "x", "O"]
//   ])
// );

// console.log(
//   ticTacWin([
//     [1, 2, 1],
//     [1, 1, 2],
//     [2, 2, 0]
//   ])
// );

// console.log(
//   ticTacWin([
//     [2, 2, 2],
//     [0, 1, 1],
//     [1, 0, 0]
//   ])
// );

// console.log(
//   ticTacWin([
//     [2, 1, 2],
//     [2, 1, 1],
//     [1, 2, 1]
//   ])
// );

// console.log(
//   ticTacWin([
//     [0, 2, 2],
//     [2, 1, 1],
//     [0, 0, 1]
//   ])
// );

// console.log(
//   ticTacWin([
//     [1, 2, 0],
//     [0, 1, 2],
//     [0, 0, 1]
//   ])
// );

// console.log(
//   ticTacWin([
//     [1, 2, 1],
//     [1, 1, 2],
//     [2, 1, 2]
//   ])
// );

console.log(
  ticTacWin([
    [0, 0, 2],
    [0, 0, 0],
    [1, 0, 1]
  ])
);
