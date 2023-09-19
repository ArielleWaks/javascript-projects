let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
console.log(foodArray);
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepArray = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepArray];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let question2 = input.question(`Which cabinet (0 - 3) would you like to open?`);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (question2 === '0' || question2 === '1' || question2 === '2' || question2 === '3') {
    console.log(`You've opened the cabinet containing ${cargoHold[question2]}! `);
    let question3 = input.question("Which of these items would you like to retrieve?");
    if (cargoHold[question2].includes(question3)) {
        console.log(`Cabinet ${question2} DOES contain ${question3}`);
    } else {
        console.log(`Cabinet ${question2} DOES NOT contain ${question3}`);
    }
} else {
    console.log(`error: ${question2} is an invalid answer`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
// let question3 = input.question("Which of these items would you like to retrieve?");
