// Declare and assign the variables below
let ShuttleName = "Determination"
let ShuttleSpeed_MPH = 17500
let DistanceMars_KM = 225000000
let DistanceMoon_KM = 384400
const MilesPerKM = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof ShuttleName)
console.log(typeof ShuttleSpeed_MPH)
console.log(typeof DistanceMars_KM)
console.log(typeof DistanceMoon_KM)
console.log(typeof MilesPerKM)

// Calculate a space mission below

let DistanceMars_Miles = DistanceMars_KM*MilesPerKM
let DistanceMars_Hours = DistanceMars_Miles/ShuttleSpeed_MPH
let DistanceMars_Days = DistanceMars_Hours/24

// Print the results of the space mission calculations below

console.log(ShuttleName+" will take "+DistanceMars_Days+" days to reach Mars.")

// Calculate a trip to the moon below

let DistanceMoon_Miles = DistanceMoon_KM*MilesPerKM
let DistanceMoon_Hours = DistanceMoon_Miles/ShuttleSpeed_MPH
let DistanceMoon_Days = DistanceMoon_Hours/24

// Print the results of the trip to the moon below
console.log(ShuttleName + " will take "+DistanceMoon_Days+" days to reach the Moon.");