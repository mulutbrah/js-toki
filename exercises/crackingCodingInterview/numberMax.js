/*
    Write a method that finds the maximum of two numbers. You should not use if-else 
    or any other comparison operator.
*/

function numberMax(number1, number2) {
  return [number1, number2].sort((a, b) => b - a)[0];
}

console.log(numberMax(100, 2000));
console.log(numberMax(10320, 2000));
console.log(numberMax(1, 2));
console.log(numberMax(-100, 2000));
