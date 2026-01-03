// creates a function that checks whether an array contains odd numbers

function isOddNumbers(numbers) {
    const odds = [];
    for (const number of numbers) {
        odds.push(number);
    }
    const len = odds.length;
    return (len > 0) ? ("Odd numbers found!") : ("No odd numbers found");
};

// call the function by passing array as a parameter
const numbers = [23, 12, 3, 4, 67, 7];
console.log(isOddNumbers(numbers));
