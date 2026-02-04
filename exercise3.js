// Name: Kyle Gladden
// Assessment: Lab#1

const numbers = [1, 2, 3, 4, 5];

//variable containing an squared version of the values in the numbers array
const squared = numbers.map(num => num*num);

//Variable containing even values from the array
const evens = numbers.filter(num => num%2 == 0);

//Sums each value in the array together
const sum = numbers.reduce((total, sum) => {
    
    return total + sum;

}, 0);

console.log("Squared: ", squared);
console.log("Even numbers: ", evens);
<<<<<<< HEAD
console.log("Sum: ", sum);
=======
console.log("Sum: ", sum());
>>>>>>> main
