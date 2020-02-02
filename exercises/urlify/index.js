function urlify(str) {
  const splited = str.trim().split("");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === " ") {
      splited[i] = "%20";
    }
  }

  return splited.join("");
}

console.log(urlify("Mr John Smith "));
