/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 2; i < 30; i++) {
  if ( i % 2 === 1) {
    console.log(i);
  }
}

for (let j = 12; j > -15; j--) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

/*
for (let i = 12; i >= -14; i-=2) {
   console.log(i);
}
*/

for (let k = 50; k > 19; k--) {
  if (k % 3 === 0) {
    console.log(k);
  }
}


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let string1 = 'LaunchCode';
let array1 = [1, 5, 'LC101', 'blue', 42];

for (a = string1.length - 1; a >= 0; a--) {
  console.log(string1[a]);
}

for (b = 0; b < array1.length; b++) {
  console.log(array1[b]);
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let array2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evensArray = [];
let oddsArray = [];

for (let p = 0; p < array2.length; p++) {
  if (array2[p] % 2 === 0) {
    evensArray.push(array2[p]);
  } else {
    oddsArray.push(array2[p]);
  }
}

console.log(evensArray);
console.log(oddsArray);