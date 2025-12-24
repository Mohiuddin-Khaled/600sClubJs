// return type and non return type function

// In function special keyword: return

// create a function that receive a number value and multiply value by 10 
function tenTimes(number) {
    const result = number * 10;
    return result;
};
// store the return value of the function in a variable 
const output = tenTimes(5)
console.log(output);


// create a function that takes two numbers value as parameters and added two numbers
// function add(price1, price2) {
//     const total = price1 + price2;
//     return total;
// };
function add(price1, price2) {
    return price1 + price2;
};
// store the return value of the function in a variable
const bill = add(5, 80);
console.log(bill);


// declare a multiple variables to store different values
const potato = 35;
const onion = 62;
const shirt = 500;
const pant = 1250;
// create a function that takes two variables values as parameters and added two variables
function add(price1, price2) {
    return price1 + price2;
};
// store the return value of the function in a different variable
const bill1 = add(potato, onion);
const bill2 = add(shirt, pant);
const final = add(bill1, bill2);
console.log(final);


// create a function that takes two numbers value as parameters
// calculate arithmetic operations on two numbers
function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
};
// store the return value of the function in a variable
const result = doMath(10, 5);
console.log(result);


// create a function that returns true if the number is even or false if the number is not even
function isEven(num) { // num is a parameter
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
// call the function by passing the number value as a argument 
console.log(isEven(5));
console.log(isEven(110));


// create a function that returns true if the number is odd or false if the number is not odd
function isOdd(num) {
    if (num % 2 === 1) {
        return true;
    }
    return false;
};
// call the function by passing the number value as a argument
console.log(isOdd(10));
console.log(isOdd(7));