// property: key and value pair
// property name: key
// property value: value
// object properties is {key: value}

// Declare a person object 
// const person = {
//     name: "Sodor Uddin",
//     age: 25,
//     profession: "Developer",
//     salary: 25000,
//     married: true
// };

// DOT Notation ---> object.key
// console.log(person.profession);

// Bracket Notation ---> [' ']
// console.log(person['married']);

const person = {
    name: 'Sodor Uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarban', 'saintmartin', 'kuakata'] // Bracket Notation
};
// Bracket Notation
// console.log(person['married']);
// console.log(person['fav places']);

// specific key and value pair of object to store the variable
// const propertyName = 'profession';
// bracketNotation
// console.log(person[propertyName]);

const cricketer = {
    position: 4,
    specialty: "better",
    age: 24,
    runs: 8000
};

console.log(cricketer.position); // dot notation
console.log(cricketer['runs']); // bracket notation

// values assign in properties can use dot or bracket notation
cricketer.position = 1;
cricketer['runs'] = 9000;

// console.log(cricketer['position']);
// console.log(cricketer.runs);

// Declare a college object
const college = {
    name: 'vnc',
    class: ['11', '12'], // array of object
    events: ['science fair', 'bijoy dibos', '21 feb'], // array of object
    unique: { // object of object 
        color: 'blue',
        result: { // object of object
            gpa: 5,
            merit: 'top'
        }
    }
};

// console.log(college.unique.color); // dot notation
// console.log(college.unique.result.gpa); // dot notation
// console.log(college.events[2]); // bracket notation
