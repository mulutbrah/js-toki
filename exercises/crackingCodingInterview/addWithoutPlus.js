/*
    Write a function that adds two numbers. 
    You should not use + or any arithmetic operators.
*/

function addWithoutPlus(number1, number2) {
  while (number2 != 0) {
    let carry = number1 & number2;

    number1 = number1 ^ number2;

    number2 = carry << 1;
  }

  return number1;
}

console.log(addWithoutPlus(4, 5));
