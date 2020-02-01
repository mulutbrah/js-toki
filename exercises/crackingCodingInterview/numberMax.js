/*
    Write a method that finds the maximum of two numbers. You should not use if-else 
    or any other comparison operator.
*/

function numberMax(number1, number2) {
  return [number1, number2].sort(function(a, b) {
    return a + b;
  })[0];
}

console.log(numberMax(100, 20));
