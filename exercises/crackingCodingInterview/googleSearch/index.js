const googleDatabase = ["abc.com", "dogs.com", "amazon.com", "facebook.com"];

function googleSearch(input, db = googleDatabase) {
  const matches = db.filter((item) => {
    return item.includes(input);
  });

  return matches.length > 3 ? matches[0] : matches;
}

module.exports = googleSearch;
