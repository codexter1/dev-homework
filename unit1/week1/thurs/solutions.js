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

//isPal('Radar'); was true
isPal('Palindrone'); //is funny

//digit sum
  const sumDigits = (num) => {
    return num.toString().split('').map(Number).reduce(sum = (a,b) => {
      return a + b;
    },0)
}

console.log(sumDigits(123));

//pythagoras
const calculateSide = (sideA, sideB) => {
    let sideC = Math.pow(sideA,2) + Math.pow(sideA,2)
    return sideC
}

console.log(calculateSide(5,5));

//Sum Array
const sumArray = (array) => {
  //return sum of array
}

console.log(sumArray[1,2,3,4,]);
