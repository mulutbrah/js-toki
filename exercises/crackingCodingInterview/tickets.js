function tickets(peopleInLine) {
  let cash = 0;

  for (let val of peopleInLine) {
    const charge = 25 - val;

    if (cash < Math.abs(charge)) {
      return "NO";
    } else {
      cash += 25;
    }
  }

  return "YES";
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));
