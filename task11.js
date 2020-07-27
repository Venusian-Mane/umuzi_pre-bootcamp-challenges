// Below i've created a function that will display all the common chracters between 2 strings
function commonChar(string1, string2) {
  if (string1.length >= string2.length) {
    var longestStr = string1;
    var shortestStr = string2;
  } else {
    var longestStr = string2;
    var shortestStr = string1;
    // Above i created code that will determine the longest and shortest strings
    // It is necessary to loop through the longest string because it has more characters that need to be checked.
  }
  let common = [];
  // i created a list above to hold the commonletters of the string

  console.log(longestStr);
  console.log(shortestStr);
  // I print out the two strings again just for easier visual display.

  for (i = 0; i < longestStr.length; i++) {
    for (j = 0; j <= shortestStr.length; j++) {
      if (longestStr[i] == shortestStr[j]) {
        if (common.includes(longestStr[i])) {
        } else {
          common.push(longestStr[i]);
        }
        // Above ive created the code to make loop through both strings (along the first to the second one)
        // and put the common charcters into the list.
      }
    }
  }
  console.log(`Common letters are: ${common}`);
}

// i called the function below.
// You may change the arguments to test the function.
commonChar("Manelisi", "Madini");
