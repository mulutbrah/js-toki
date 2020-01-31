function jumpingOnClouds(c) {
  let jumpCount = 0;

  if (c[0] === "1") return jumpCount;

  for (let i = 0; i < c.length; i++) {
    if (c[i] === "0") {
      if (c[i] === c[i + 1]) {
        jumpCount++;
        i++;
      }
    } else {
      jumpCount++;
    }
  }

  return jumpCount;
}

console.log(jumpingOnClouds("000100"));
