// Name: Kyle Gladden
// Assessment: Lab#1

const person = {
    species: 'Human',
    breathe() {
        return 'Breathing....';
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function(name) {
    this.team.push(name);
}

console.log(Object.hasOwn(manager, 'team'));//EXPECTED RESULT: True
console.log(Object.hasOwn(manager, 'position'));//EXPECTED RESULT: false
console.log(Object.hasOwn(employee, 'position'));//EXPECTED RESULT: True
console.log(Object.hasOwn(employee, 'species'));//EXPECTED RESULT: false
console.log(Object.hasOwn(person, 'species'));//EXPECTED RESULT: true

manager.addTeamMember('John');
manager.addTeamMember('Sarah');

console.log(manager.team);