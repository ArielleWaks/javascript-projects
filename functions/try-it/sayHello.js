function sayHello() {
   console.log("Hello, World!");
}

sayHello();

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');