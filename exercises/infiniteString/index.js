function repeatedString(s, n) {
  const arr = s.split("");
  const hash = {};
  let pointer = 0;

  for (let i = arr.length; i < n; i++) {
    arr.push(s[pointer]);
    pointer++;

    if (pointer === s.length) {
      pointer = 0;
    }
  }

  for (let val of arr) {
    hash[val] = hash[val] + 1 || 1;
  }

  console.log(arr);

  console.log(hash["a"]);
}

repeatedString("aba", 10);
