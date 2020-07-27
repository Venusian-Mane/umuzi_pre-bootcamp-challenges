// I've created a function that will search and print out all the vowels in the string
function vowelSearch(string) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (i = 0; i < string.length; i++) {
    for (j = 0; j <= vowels.length; j++) {
      if (string[i] == vowels[j]) {
        console.log(string[i]);
      }
    }
  }
}

// below i call the function that will print out al the vowels
// you may change the arguments to test the function
vowelSearch("My name is Manelisi");
