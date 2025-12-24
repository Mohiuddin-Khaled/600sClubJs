// practice 1 page 161

// create a function that return whether the sum of odd numbers in an array

function oddNumbersSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            sum = sum + number;
        }
    }
    return sum;
};

// call the function by passing an array as a parameter
const numbers = [5, 15, 8, 7];
const total = oddNumbersSum(numbers);
console.log(total);