let str = "blue";
let reversed = ""; // accumulator variable

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed); // eulb