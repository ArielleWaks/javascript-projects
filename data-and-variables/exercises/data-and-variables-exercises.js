// Declare and assign the variables below
let ShuttleName = "Determination";
let ShuttleSpeedMph = 17500;
let DistanceMarsKm = 225000000;
let DistanceMoonKm = 384400;
const MilesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof ShuttleName);
console.log(typeof ShuttleSpeedMph);
console.log(typeof DistanceMarsKm);
console.log(typeof DistanceMoonKm);
console.log(typeof MilesPerKm);

// Calculate a space mission below

let DistanceMarsMiles = DistanceMarsKm*MilesPerKm;
let DistanceMarsHours = DistanceMarsMiles/ShuttleSpeedMph;
let DistanceMarsDays = DistanceMarsHours/24;

// Print the results of the space mission calculations below

console.log(ShuttleName + " will take " + DistanceMarsDays + " days to reach Mars.");

// Calculate a trip to the moon below

let DistanceMoonMiles = DistanceMoonKm * MilesPerKm;
let DistanceMoonHours = DistanceMoonMiles / ShuttleSpeedMph;
let DistanceMoonDays = DistanceMoonHours / 24;

// Print the results of the trip to the moon below
console.log(ShuttleName + " will take " + DistanceMoonDays + " days to reach the Moon.");

