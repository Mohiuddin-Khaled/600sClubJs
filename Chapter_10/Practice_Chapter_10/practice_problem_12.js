// create a function that return odd numbers of an array with each value multiplied by 2

function oddMultiply(numbers) {
    let odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number * 2);
        }
    }
    return odds;
};

// call the function by passing array as a parameter
const numbers = [3, 4, 6, 1, 6, 7, 9];
const multiNumbers = oddMultiply(numbers);
console.log(multiNumbers);