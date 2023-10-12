function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try {
      result = lab.runLab(3) === 27;
      if (result != true) {
        throw new EvalError("incorrect result")
      }
    } catch (err) {
      //console.log(err)
      if (err instanceof TypeError) {
        result = "Error thrown";
      }
      if (err instanceof EvalError) {
        result = err.message;
      }
    } finally {
      console.log(`${lab.student} code worked: ${result}`);
    }
  }
}
// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If the exception is thrown, result should be set to the text "Error thrown"

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2); // TypeError: lab.runLab is not a function
