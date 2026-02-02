// Name: Kyle Gladden
// Assessment: Lab#1

//Function Declaration that takes two parameters and returns their product

function calculateArea(length, width) {
    return length * width;
}

//Function that returns the perimeter

const calcPerimeter = function(length, width) {
    return 2*length + 2*width;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(7, 3));
console.log(calculateArea(4, 4));

console.log(calcPerimeter(5, 10));
console.log(calcPerimeter(7, 3));
console.log(calcPerimeter(4, 4));