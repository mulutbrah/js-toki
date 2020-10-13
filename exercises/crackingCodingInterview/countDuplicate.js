function countDuplicateArray(arr) {
  // #1
  const hash = {};

  for (let val of arr) {
    hash[val] = hash[val] + 1 || 1;
  }

  return Object.values(hash).filter((item) => item >= 2).length;

  // #2
  // return [...new Set(arr)].length === arr.length;
}

console.log(
  countDuplicateArray([
    "dog",
    "dog",
    "cat",
    "buffalo",
    "wolf",
    "cat",
    "tiger",
    "cat",
  ])
);
