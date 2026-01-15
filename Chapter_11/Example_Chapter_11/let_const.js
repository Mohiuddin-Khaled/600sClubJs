// ECMAScript --> ES v.6 --> Release 2015
// var --> Not Recommended

// let --> change variable value
// const --> don't change variable value

// const money = 25;
// money = 50; // TypeError: Assignment to constant variable.

// const money = 25;
// const rich = money + 25;
// console.log(rich);

// let count = 0;
// count = count + 10;
// console.log(count);

// If a const variable value is an array or an object, its content can be changed
// const numbers = [23, 4, 23, 12, 56];
// numbers[1] = 55;
// console.log(numbers);

// push() or pop() operations
// const numbers = [23, 4, 23, 12, 56];
// numbers[1] = 55;
// numbers.push(8, 9, 65);
// console.log(numbers);

// use dot or bracket notation to change object properties value
const student = {
    name: 'David',
    class: 12,
}
// student = { // object variable re-assign
//     name: 'Alex',
// }
// console.log(student); // TypeError: Assignment to constant variable

// update or add object properties
student.name = 'Alex Kam';
console.log(student);