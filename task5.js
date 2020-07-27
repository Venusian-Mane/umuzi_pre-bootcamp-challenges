// I've created a function that will calculate the area of a triangle given its 3 sides as arguments

function triangleArea(side1, side2, side3) {
  let p = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  return area;
}
// I have made the function round off the answer to 2 decimal places
// You may change the arguments to test the function

console.log(triangleArea(18, 17, 17).toFixed(2));
