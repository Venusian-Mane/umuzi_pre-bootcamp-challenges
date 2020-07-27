function printXValue() {
  var x_value = Number(document.getElementById("x-var").value);
  alert(`The value of X is now ${x_value}`);
}
function printYValue() {
  var x_value = Number(document.getElementById("x-var").value);
  var y_value = Number(document.getElementById("y-var").value);
  alert(`The value of Y is now ${y_value + x_value}`);
}

function numChecker(check65_num1, check65_num2) {
  check65_num1 = document.getElementById("check65_num1").value;
  check65_num2 = document.getElementById("check65_num2").value;
  var result = document.getElementById("result65");
  if (check65_num1 == 65 || check65_num2 == 65) {
    result.innerHTML = true;
  } else if (Number(check65_num1) + Number(check65_num2) == 65) {
    result.innerHTML = true;
    console.log(check65_num1);
    console.log(check65_num2);
  } else {
    result.innerHTML = false;
    console.log(check65_num1);
    console.log(check65_num2);
  }
}

function threeChecker(num1, num2) {
  num1 = document.getElementById("check3_num1").value;
  num2 = document.getElementById("check3_num2").value;
  let result = document.getElementById("result3");
  let sum = Number(num1) + Number(num2);
  if (
    (num1 == 3 && sum.toString().indexOf("3") > -1 === true) ||
    (num2 == 3 && sum.toString().indexOf("3") > -1 === true)
  ) {
    result.innerHTML = true;
  } else {
    result.innerHTML = false;
  }
}

function triangleArea(side1, side2, side3) {
  side1 = Number(document.getElementById("triSide1").value);
  side2 = Number(document.getElementById("triSide2").value);
  side3 = Number(document.getElementById("triSide3").value);
  let result = document.getElementById("triResult");
  let p = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  result.innerHTML = area.toFixed(2);
}

function highestNum(num1, num2, num3) {
  num1 = Number(document.getElementById("bigNum1").value);
  num2 = Number(document.getElementById("bigNum2").value);
  num3 = Number(document.getElementById("bigNum3").value);
  let result = document.getElementById("bigNumResult");
  if (num1 >= num2 && num1 >= num3) {
    result.innerHTML = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    result.innerHTML = num2;
  } else {
    result.innerHTML = num3;
  }
}

function fahrenheitConvert(temp) {
  temp = Number(document.getElementById("fahrInput").value);
  let result = document.getElementById("fahrOutput");
  let fahr = (temp * 9) / 5 + 32;
  result.innerHTML = fahr.toFixed(2);
}
function celciusConvert(temp) {
  temp = Number(document.getElementById("celciusInput").value);
  let result = document.getElementById("celciusOutput");
  let celc = ((temp - 32) * 5) / 9;
  result.innerHTML = celc.toFixed(2);
}

function minuteConvert(mins) {
  mins = Number(document.getElementById("time1").value);
  let result = document.getElementById("timeOutput");
  let hours = 0;
  for (i = 1; i <= mins; i++) {
    if (i % 60 == 0) {
      hours += 1;
    }
  }
  let newMins = Number(mins) % 60;
  result.innerHTML = `The new time is ${hours} hours and ${newMins} minutes`;
}

function multipleSum() {
  let result = document.getElementById("multiplesResult");
  let sum = 0;
  for (i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  result.innerHTML = sum;
}

function vowelSearch(string) {
  string = document.getElementById("vowelString").value;
  let result = document.getElementById("vowelOutput");
  let vowelList = [];
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (i = 0; i < string.length; i++) {
    for (j = 0; j <= vowels.length; j++) {
      if (string[i] == vowels[j]) {
        vowelList.push(string[i]);
      }
    }
  }
  result.innerHTML = vowelList;
}

function commonChar(string1, string2) {
  string1 = document.getElementById("string1").value;
  string2 = document.getElementById("string2").value;
  let result = document.getElementById("commonChars");
  if (string1.length >= string2.length) {
    var longestStr = string1;
    var shortestStr = string2;
  } else {
    var longestStr = string2;
    var shortestStr = string1;
  }
  let common = [];
  for (i = 0; i < longestStr.length; i++) {
    for (j = 0; j <= shortestStr.length; j++) {
      if (longestStr[i] == shortestStr[j]) {
        if (common.includes(longestStr[i])) {
        } else {
          common.push(longestStr[i]);
        }
      }
    }
  }
  result.innerHTML = `Common letters are: ${common}`;
}
