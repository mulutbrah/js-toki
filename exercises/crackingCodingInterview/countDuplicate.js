function countDuplicateArray(arr) {
  const hash = {};

  for (let val of arr) {
    hash[val] = hash[val] + 1 || 1;
  }

  return [hash];
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
    "cat"
  ])
);
