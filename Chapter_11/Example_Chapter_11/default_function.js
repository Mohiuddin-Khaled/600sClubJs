// create a function that return sum of two values

// function add(num1, num2) { // parameters
//     const result = num1 + num2;
//     return result;
// };

// const sum = add(5, 7); // arguments
// console.log(sum);


// function add(num1, num2) { // parameters
//     const result = num1 + num2;
//     console.log(num1, num2, result); // number + undefine -> NaN(Not a Number)
//     return result;
// };
// undefine + undefine --> NaN(Not a Number)
// const sum = add(5); // arguments
// console.log(sum);

// set the default value as a parameter value
// function add(num1, num2 = 0) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// };

// const sum = add(5);
// console.log(sum);


// set default value for all parameter
// function add(num1 = 0, num2 = 0) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// };

// const sum = add();
// console.log(sum);
// const total = add(17, 19);
// console.log(total);

// default value in function as a parameter
function createUser(name = "", education = {}, age = 0, hobbies = []) {

};

/*
 1. number type parameter set 0 (age = 0)
 2. arithmetic operations(subtract, division) type parameter set 1
 3. string type parameter set "" (name = "")
 4. array type parameter set [] (hobbies = [])
 5. object type parameter set {} (education = {})
*/