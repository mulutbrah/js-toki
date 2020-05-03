const googleDatabase = ["abc.com", "dogs.com", "amazon.com", "facebook.com"];

function googleSearch(input) {
  const matches = googleDatabase.filter((item) => {
    return item.includes(input);
  });

  return matches.length > 3 ? matches[0] : matches;
}

console.log(googleSearch("ab"));
console.log(googleSearch("abc"));
console.log(googleSearch("doodogs"));
console.log(googleSearch("dogs"));
