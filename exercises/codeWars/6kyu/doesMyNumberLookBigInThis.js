function index(number) {
  return (
    [...("" + number)].reduce(
      (x, y) => x + Math.pow(+y, ("" + number).length),
      0
    ) == number
  );
}
