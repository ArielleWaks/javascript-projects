const test = require('../checkFive.js');

const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("should return 'num is less than 5' when num < 5.", function() {
      //code here...
      let output = checkFive(2);
      expect(output).toBe("2 is less than 5.");

   });
   
   test("should return 'num is greater than 5' when num > 5.", function () {
    let output = checkFive(7);
    expect(output).toBe("7 is greater than 5.");
   });

   test("should return 'num is equal to 5' when num === 5.", function () {
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
   })

});

