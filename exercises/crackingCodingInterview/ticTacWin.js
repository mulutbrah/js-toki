/*
    Design an algorithm to figure out if someone has won a game of tic-tac-toe.
*/

function titTacWin(table) {
  const winnerMap = {};

  for (let i = 0; i < table[i].length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === "O" || table[i][j] === "x") {
        if (
          (table[i][j - 1] && table[i][j - 1] === table[i][j]) ||
          (table[i][j + 1] && table[i][j + 1] === table[i][j]) ||
          (table[i][j + 2] && table[i][j + 2] === table[i][j]) ||
          (table[i - 1][j - 1] && table[i - 1][j - 1] === table[i][j]) ||
          (table[i][j - 1] && table[i][j - 1] === table[i][j]) ||
          (table[i - 1][j - 2] && table[i - 1][j - 2] === table[i][j]) ||
          (table[i - 1][j - 1] && table[i - 1][j - 1] === table[i][j]) ||
          (table[i - 1][j] && table[i - 1][j] === table[i][j])
        ) {
          winnerMap.count = winnerMap.count + 1 || 1;
          if (winnerMap.count === 3) {
            return table[i][j];
          }
        }
      }
    }
  }
}

console.log(
  titTacWin([
    ["x", " ", "O"],
    [" ", " ", "O"],
    ["x", "x", "O"]
  ])
);
