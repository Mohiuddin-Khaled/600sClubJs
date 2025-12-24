// create a function that return the multiplied value of numbers in an array that are divisible by 3

function multipliedNumber(numbers) {
    let multiplied = 1;
    for (const number of numbers) {
        if (number % 3 === 0) {
            multiplied *= number;
        }
    }
    return multiplied;
};

// call the function by passing an array as a parameter
const numbers = [3, 2, 5, 7, 9, 12, 46];
const total = multipliedNumber(numbers);
console.log(total);