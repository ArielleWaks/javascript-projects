//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');

let fuelLevel = Number(input.question('What is the starting fuel level? '));
let astronauts = 0;
let altitude = 0;

// let fuelQ = input.question('What is the starting fuel level? ');
// fuelLevel = Number(fuelQ);

while (fuelLevel <= 5000 || fuelLevel >= 30000 || isNaN(fuelLevel)) {
   fuelLevel = input.question(`Sorry, ${fuelLevel} is not a valid fuel level. Please enter a fuel level greater than 5000 and less than 30000: `);
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
// let astronautsQ = 'Enter the number of astronauts: ';
// astronautsQ = Number(astronautsQ);

while (astronauts <= 0 || astronauts > 7 || isNaN(astronauts)) {
  astronauts = input.question('Please enter a crew size 1 to 7: ');
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while ( fuelLevel > 0) {
  fuelLevel -= (100 * astronauts);
  altitude += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (altitude >= 2000) {
  console.log(`The shuttle gained an altitude of ${altitude} km. Orbit achieved!`);
} else {
  console.log(`The shuttle gained an altitude of ${altitude} km. Failed to reach orbit.`);
}