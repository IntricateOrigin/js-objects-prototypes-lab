// Name: Kyle Gladden
// Assessment: Lab#1

const shape = {
    calculateArea() {
        return 0;
    }
};

const rectangle = Object.create(shape);
rectangle. width = 5;
rectangle.heigth = 4;
rectangle.calculateArea = function() {
    return this.width * this.heigth;
}

const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
};

console.log(rectangle.calculateArea());
circle.calculateArea();