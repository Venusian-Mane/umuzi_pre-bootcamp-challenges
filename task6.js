// I've created a function that takes three numbers as arguments and return the highest number of the three.

function highestNum(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}
// Ive used the functin below here. You may change the arguments to test the function.
console.log(highestNum(12, 450, 120));
