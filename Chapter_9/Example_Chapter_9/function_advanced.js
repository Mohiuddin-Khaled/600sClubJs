// function parameter types are numbers, variables, strings, arrays

// operations of array
// summation of array elements

// step-1: call the function
/*
function sumOfNumbers() {

};
const result = sumOfNumbers();
console.log(result);
*/

// step-2: pass and output the array
/*
function sumOfNumbers(numbers) {
    console.log(numbers);
};
const result = sumOfNumbers([12, 45, 6, 8, 14]);
console.log(result);
*/

// step-3: loop through the array
/*
function sumOfNumbers(numbers) {
    for (const number of numbers) {
        console.log(number);
    }
};
const result = sumOfNumbers([12, 45, 6, 8, 14]);
console.log(result);
*/

// step-4: declare variable & sum each array elements
/*
function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
        console.log(sum);
    }
};
const numbers = [54, 62, 12, 6];
const sum = sumOfNumbers(numbers);
*/

// step-5: return the total sum
/*
function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
};
const numbers = [54, 62, 12, 6];
const total = sumOfNumbers(numbers);
console.log("sum of the numbers is", total);
*/

// Advanced function
function evenNumbersSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum = sum + number;
        }
    }
    return sum;
};

const numbers = [12, 53, 6, 1];
const total = evenNumbersSum(numbers);
console.log(total);