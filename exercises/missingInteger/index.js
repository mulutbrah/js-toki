const missingInteger = (A) => {
  // 1
  //   const sorted = A.sort();
  //   return sorted.reduce((acc, val) => (acc === val ? acc + 1 : acc), 1);

  // 2
  const map = {};

  A.map((x) => {
    map[x] = x;
    return x;
  });

  let result = 1;

  while (true) {
    if (!map[result]) return result;
    result++;
  }
};

console.log(missingInteger([-1, -3, -6, -4, -5, 1, 2]));
