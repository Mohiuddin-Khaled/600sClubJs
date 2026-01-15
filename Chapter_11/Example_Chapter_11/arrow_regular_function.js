/*
    function types:
        1. function
        2. function expression(variable)
        3. arrow function(arrow)
*/

// create a function
// function add(a, b) {
//     const result = a + b;
//     return result;
// }

// const sum = add(5, 90);
// console.log(sum);

// another way (short format)
// function add(a, b) {
//     return a + b;
// }
// const sum = add(5, 90);
// console.log(sum);

// declare a function using keyword
// const add2 = function(a, b){ // function expression
//     return a + b;
// }

// arrow function used to simplify function syntax
// const add3 = (a, b) => a + b;
// const sum = add3(5, 90);
// console.log(sum);

// another arrow function
// const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
// const sum = add4(5, 30, 4, 6);
// console.log(sum);


// object pass in arrow function as a parameter

// const student = {
//     name: "David",
//     age: 23
// };

// const getName = person => person.name;
// const getAge = (person) => person.age;
// const name = getName(student);
// const age = getAge(student);
// console.log(name, age);

// array pass in arrow function as a parameter
// const getThird = numbers => numbers[3];
// const third = getThird([5, 34, 6, 26, 6]);
// console.log(third);

// without parameter an arrow function
// const getThird = () => Math.PI;
// console.log(getThird().toFixed(4));

// const getPi = () => Math.PI;
// console.log(getPi());

// Multiline code in arrow function and return output
// const doMath = (a, b, c, d) => {
//     const sum = a + b + c + d;
//     const multi = a * b * c * d;
//     const result = sum + multi;
//     return result;
// }

// const result = doMath(3, 5, 7, 8);
// console.log(result);

// difference between regular and arrow function
// simple or easy task and call back function use arrow function
// this keyword use in regular function

// const person = {
//     name: "David",
//     greetRegular: function () {
//         console.log("Hello, " + this.name);
//     },
//     greetArrow: () => {
//         console.log("Hello, " + this.name);
//     }
// };

// person.greetRegular();
// person.greetArrow();

// default parameter in an arrow function
// const greet = (name = "guest") => `Hello, ${name}`;
// console.log(greet());
// console.log(greet("David"));

// return an object using parenthesis

// wrong approach
// const getObject = () => { key: "value" };
// console.log(getObject());

// right approach 
const getObject = () => ({ key: "value" });
console.log(getObject());