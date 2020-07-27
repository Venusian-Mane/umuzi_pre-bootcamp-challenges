function minuteConvert(mins) {
  //Ive started the hours on 0 as default
  let hours = 0;

  for (i = 1; i <= mins; i++) {
    // i created a loop that adds an hour every 60 increments
    if (i % 60 == 0) {
      hours += 1;
    }
  }
  // and made the minutes by getting the remainder of the division of the mins by 60.
  let newMins = mins % 60;

  // this function will return a sentence saying the time in hours and minutes ass soon the function is called.
  return console.log(`The new time is ${hours} hours and ${newMins} minutes`);
}

// Ive called the function that will return the sentence explaining he new time.
// You may change the arguments in the function to test it.
minuteConvert(133);
