function duplicateCount(text) {
  const hash = {};

  for (let val of text.split("")) {
    hash[val.toLowerCase()] = hash[val.toLowerCase()] + 1 || 1;
  }

  return Object.values(hash).filter(value => value >= 2).length;
}
