// Name: Kyle Gladden
// Assessment: Lab#1

const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

    //Method that uses "this." to access the properties of the object
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    //Method that inserts the given value that is passed into the perimeter of the method and into the array
    enrollCourse(courseName) {
        this.courses.push(courseName);
    },
    //uses ".length" to get the size of the array
    getCourseCount(){
        return this.courses.length;
        }
    };

    console.log(student.getFullName());
student.enrollCourse(`CMPS2212`);
student.enrollCourse(`MATH2210`);    
console.log(student.getCourseCount());
