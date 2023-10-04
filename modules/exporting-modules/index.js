// Import the modules exported from practiceExports.js below:

const practice = require('./practiceExports');

console.log(typeof practice); // object
// console.log(practice);

//to call one of the functions, use practice.functionName(argument)

let arr = ['hello', 'world', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));

console.log(practice.evenOrOdd(99));

for (i = 0; i < 3; i++) {
    console.log(practice.randomArrayElement(arr));
}
