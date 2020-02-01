/*
    Given a positive number n > 1 find the prime factor decomposition of n. 
    The result will be a string with the following form :

    "(p1**n1)(p2**n2)...(pk**nk)"

    with the p(i) in increasing order and n(i) empty if n(i) is 1.

    Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

function primeFactors(n) {
  const hash = {};
  const res = [];
  let divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      hash[divisor] = hash[divisor] + 1 || 1;
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  for (let val in hash) {
    if (hash[val] > 1) {
      res.push(`(${val}**${hash[val]})`);
    } else {
      res.push(`(${val})`);
    }
  }

  return res.join("");
}

console.log(primeFactors(86240));
