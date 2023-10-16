//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor (name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore (newScore) {
        this.scores.push(newScore);
    }
    average () {
        let scoreSum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            scoreSum += this.scores[i];
        }
        let scoreAverage = Math.round(scoreSum / this.scores.length * 10) / 10;
        return scoreAverage
    }
    status () {
        let candidateStatus = '';
        if (this.average() >= 90) {
            candidateStatus = 'Accepted';
        } else if (this.average() >= 80) {
            candidateStatus = 'Reserve';
        } else if (this.average() >= 70) {
            candidateStatus = 'Probationary';
        } else {
            candidateStatus = 'Rejected'
        }
        return candidateStatus;
    }
}

let bubba = new CrewCandidate ('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate ('Merry Maltese', 1.5, [93, 88, 97]);
let glad = new CrewCandidate ('Glad Gator', 225, [75, 78, 62]);

let candidateArray = [bubba, merry, glad];

for (let i = 0; i < candidateArray.length; i++) {
    console.log(`${candidateArray[i].name} earned an average test score of ${candidateArray[i].average()}% and has a status of ${candidateArray[i].status()}.`);
}

function boostStatus (candidateName) {
    let tests = 0;
    while (candidateName.status() !== 'Accepted') {
        tests += 1;
        candidateName.addScore(100);
    }
    return tests;
}
console.log(boostStatus(glad));
console.log(glad.average());
//console.log(bubba, merry, glad);
//bubba.addScore(83);
//console.log(bubba.scores);
//console.log(merry.average());


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.