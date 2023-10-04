function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

function evenOrOdd(num){
    if (num%2===0){
        return "Even";
    } else {
        return "Odd";
    }
}

function randomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

// module.exports = isPalindrome; // makes the isPalindrome function available to other files
module.exports = { // to export multiple functions, create an object with this syntax
    isPalindrome: isPalindrome, // the keys will be the names used in a different file to call the functions, and the values are the functions themselves
    evenOrOdd: evenOrOdd,
    randomArrayElement: randomArrayElement
}
