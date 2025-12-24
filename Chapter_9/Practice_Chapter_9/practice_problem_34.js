// create a function that return whether the sum of the numbers is an array is divided by 4

function number4Sum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 4 === 0) {
            sum += number;
        }
    }
    return sum;
};

// call the function by passing an array as a parameter
const numbers = [2, 4, 5, 7, 8, 32, 45];
const total = number4Sum(numbers);
console.log(total);