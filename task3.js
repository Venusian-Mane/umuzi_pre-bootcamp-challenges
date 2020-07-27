// I've created a function that checks whether either of its arguments are equal to 65
// or checks whether the sum of the arguuments is equa to 65

function numChecker(num1, num2) {
  if (num1 == 65 || num2 == 65) {
    return true;
  } else if (num1 + num2 == 65) {
    return true;
  } else {
    return false;
  }
}
// I've left an example of my code here. You may change the arguments to test the function.
console.log(numChecker(60, 5));
