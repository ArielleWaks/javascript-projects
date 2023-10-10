// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should return value of the organization is 'nonprofit'", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("checks executive director", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("value of percentage of cool employees should be 100", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("value of programsOffered", function () {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

});

describe("testing launchOutput()", function () {
  test("should return 'Launch!' when passed a number only devisible by 2", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });
  test("should return 'Code!' when passed a number only devisible by 3", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
    expect(launchcode.launchOutput(9)).toBe("Code!");
  });
  test("should return 'Rocks!' when passed a number only divisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("should return 'Launchcode!' when passed a number divisible by 2 and 3", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("should return 'Launch Rocks! (CRASH!!!)' when passed a number divisible by 2 and 5", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!)");
  })
})