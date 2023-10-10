
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    let output = "";
    if (num % 2 === 0) {
        if (num % 3 === 0) {
            output = "LaunchCode!";
        } else if (num % 5 === 0) {
            output = "Launch Rocks! (CRASH!!!)";
        }
        else {
            output = "Launch!";
        }
    } else if (num % 3 === 0) {
        output = "Code!";
    } else if (num % 5 === 0) {
        output = "Rocks!";
    }
    return output;
  }
};

module.exports = launchcode;

