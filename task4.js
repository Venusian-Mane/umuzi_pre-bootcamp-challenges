// I've created a function below that checks whether the arguments conatain a 3
// and if any argument as well as the sum of the two arguments have a 3, it will return true. Otherwise will return false

function threeChecker(num1, num2) {
  let sum = num1 + num2;
  if (
    (num1 == 3 && sum.toString().indexOf("3") > -1 === true) ||
    (num2 == 3 && sum.toString().indexOf("3") > -1 === true)
  ) {
    return true;
  } else {
    return false;
  }
}
// ive left an example here that will return true. You may change the arguments to test the function.
console.log(threeChecker(20, 3));
