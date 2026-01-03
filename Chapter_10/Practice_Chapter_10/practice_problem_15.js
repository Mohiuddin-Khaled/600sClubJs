// create a function that return an array of odd numbers after subtracting 1 from each value

function subtractArray(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number - 1);
        }
    }
    return odds;
};

// call the function by passing array as a parameter
const numbers = [12, 32, 56, 7, 3, 7, 9, 3];
console.log(subtractArray(numbers));