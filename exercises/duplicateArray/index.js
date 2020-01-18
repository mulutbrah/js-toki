function duplicatedArray(arr) {
  const hash = {};
  const uniqueArray = [];
  // const duplicateCollection = [];

  for (let val of arr) {
    hash[val] = hash[val] + 1 || 1;
  }

  for (let val in hash) {
    uniqueArray.push(val);
  }

  //   collect duplicate value in hash
  //   for (let val in hash) {
  //     if (hash[val] > 1) duplicateCollection.push(val);
  //   }

  return uniqueArray;
}
