// Name: Kyle Gladden
// Assessment: Lab#1

const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    enrollCourse(courseName) {
        this.courses.push(courseName);
    },

    getCourseCount(){
        return this.courses.length;
        }
    };

const book = {
    title: `JavaScript: The Good Parts`,
    author: `Douglas Crockford`,
    year: 2008,
    isbn: `978-0596517748`
};

function displayProperty(obj, propertyName) {
    console.log(`${propertyName}: ${obj[propertyName]}`);
}

function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}


console.log(student.getFullName());
student.enrollCourse(`CMPS2212`);
student.enrollCourse(`MATH2210`);    
console.log(student.getCourseCount());

displayProperty(book, `title`);
updateProperty(book, `year`, 2024);
displayProperty(book, `year`);

