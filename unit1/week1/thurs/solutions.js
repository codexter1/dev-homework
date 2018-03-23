//verbal questions:
// a parameter creates a space within a function into which an argument can then be inserted. This allows the function to implement on a variety of values at any given time.
// return commits an output to a function's action. when we use console.log it is the action of console log and not the element that log is printing that is committed.

//palindrome:
const isPal = (string) => {
  if(string.toLowerCase() === string.split('').reverse().join('').toLowerCase()) {
    console.log(true);
  } else {
    console.log(`${string} is not a palindrone`);
  }
}

//isPal('radar'); was true
isPal('palindrone');
