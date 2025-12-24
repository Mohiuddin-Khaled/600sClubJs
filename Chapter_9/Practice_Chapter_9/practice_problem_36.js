// create a function that return the sum of negative numbers in an array

function negativeNumberSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number < 0) {
            sum += number;
        }
    }
    return sum;
};

// call the function by passing an array as a parameter
const negNumbers = [2, -3, 4, 3, -5, 0, -6];
const total = negativeNumberSum(negNumbers);
console.log(total);