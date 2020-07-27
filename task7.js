// I've created this function below that will convert Celcius to Fahrenheit.
function fahrenheitConvert(temp) {
  let fahr = (temp * 9) / 5 + 32;
  return fahr;
}

// I've created this function to convert Fahrenheit to Celcius
function celciusConvert(temp) {
  let celc = ((temp - 32) * 5) / 9;
  return celc;
}
// here i've declared some variables that make use of the functions ive created for conversion.
// You may change the arguments on the functions to test it.
let Fahrenhiet = fahrenheitConvert(30).toFixed(2);
let Celcius = celciusConvert(90).toFixed(2);

console.log(`30 degrees Celcius is equal to ${Fahrenhiet} degrees Farhenheit.`);
console.log(`90 degrees Fahrenheit is equal to ${Celcius} degress Celcius.`);
