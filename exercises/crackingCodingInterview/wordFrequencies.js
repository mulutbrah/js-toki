/*
    Design a method to find the frequency of occurrences of any given word in a book. 
    What if we were running this algorithm multiple times?
*/

function wordFrequencies(string) {
  const hash = {};

  for (let val of string) {
    hash[val] = hash[val] + 1 || 1;
  }

  return hash;
}

console.log(wordFrequencies("aaavvvavscscsqqeee"));
