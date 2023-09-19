const input = require('readline-sync');

let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(3, );
console.log(str2);
console.log(`${str2}${str.slice(0,3)}`);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let question1 = input.question("How many letters should we relocate?");
let str3 = str.slice(question1, );
console.log(`${str3}${str.slice(0,(question1-1))}`);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (question1 < str.length) {
    console.log(`${str3}${str.slice(0,(question1))}`);
} else {
    console.log(`Unfortunately, that is too many letters. If you had answered "3", you would have changed it to ${str2}${str.slice(0,3)}`);
}