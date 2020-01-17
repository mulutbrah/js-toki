function duplicatedArray(arr) {
  const hash = {};
  const uniqueArray = [];

  for (let val of arr) {
    hash[val] = hash[val] + 1 || 1;
  }

  for (let val in hash) {
    uniqueArray.push(val);
  }

  return uniqueArray;
}
