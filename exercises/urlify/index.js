function urlify(str) {
  const splited = str.split("");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === " ") {
      splited[i] = "%20";
    }
  }

  return splited.join("");
}
