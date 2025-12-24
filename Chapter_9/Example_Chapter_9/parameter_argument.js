// create a doubleIt() function

function doubleIt(number) {
    const doubled = number * 2;
    // console.log(doubled);
}

// call the function through parameter
// doubleIt(15); // parameter is 15
// doubleIt(88); // parameter is 88
// doubleIt(873); // parameter is 873
// doubleIt(7892); // parameter is 7892

// create a square() function
function square(number) {
    const borgo = number * number;
    // console.log("square of ", number, 'is: ', borgo);
};

// call the function through parameter
// square(4); // parameter is 4
// square(12); // parameter is 12


// create a add() function
function add(num1, num2) {
    const sum = num1 + num2;
    // console.log(sum);
};

// call the function through parameters
add(5, 71);
add(23, 30);

// create addAll() function
function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    // console.log(total);
};

// call the function through multiple parameter
addAll(3, 4, 6, 7, 1);


/* parameter value or argument

function function_name(parameter, parameter,......){
    /// execute the code 
}
/// call the function through argument
function_name(argument, argument,......);

*/

// create difference() function
function difference(num1, num2) {
    const subtract = num1 - num2;
    // console.log(num1, num2, "difference is ", subtract);
};

// call the function through parameter variables
const fatherAge = 40;
const myAge = 10;
difference(fatherAge, myAge);

// create addNumbers() function
function addNumbers(a, b) {
    return a + b;
};

// call the function through multiple parameters
// store the return value in the variable
// const result = addNumbers(5, 8, 9, 6);
// console.log(result);

// create addNumbers() function
function addNumbers(a, b) {
    console.log(arguments);
    return a + b;
}

// call the function with multiple arguments
// store the return value in a variable
const result = addNumbers(5, 8, 9, 6);
console.log(result);


// create addNumbers() function
// for......in --> object
// for......of --> array
function addNumbers(a, b) {
    let sum = 0;
    for (const num of arguments) { // arguments is array like object
        sum = sum + num;
    }
    // console.log(sum);
}

// call the function through multiple parameters
addNumbers(5, 8, 9, 6);


