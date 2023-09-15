// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = 1;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
console.log(astronautCount === 7);
// add logic below to verify all astronauts are ready
console.log(astronautStatus === "ready");
// add logic below to verify the total mass does not exceed the maximum limit of 850000
console.log(totalMassKg <= maximumMassLimit);
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
console.log(fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp);
// add logic below to verify the fuel level is at 100%
console.log(fuelLevel === 1);
// add logic below to verify the weather status is clear
console.log(weatherStatus === "clear");
// Verify shuttle launch can proceed based on above conditions

if ((astronautCount === 7) && (astronautStatus === "ready") && (totalMassKg <= maximumMassLimit) && (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) && (fuelLevel === 1) && (weatherStatus === "clear")) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("------------------------------");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:",crewMassKg, "kg");
    console.log("Fuel Mass:", fuelMassKg, "kg");
    console.log("Shuttle Mass:", shuttleMassKg, "kg");
    console.log("Total Mass:", totalMassKg, "kg");
    console.log("Fuel Temperature:", fuelTempCelsius, "C");
    console.log("Weather Status:", weatherStatus);
    console.log("------------------------------");
    console.log("Have a safe trip!");
} else {
    console.log("Shut down launch operations.");
}