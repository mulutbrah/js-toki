function removeParentheses(s) {
  const splited = [...s];
  let bracket = 0;
  let result = "";

  splited.forEach((item) => {
    if (item === "(") {
      bracket++;
    } else if (item === ")") {
      bracket--;
    }

    if (bracket === 0 && item === ")") {
      return false;
    }

    if (bracket === 0) {
      result += item;
    }
  });

  return result;
}

console.log(
  removeParentheses("hello example (words(more (words)) here) something")
);
