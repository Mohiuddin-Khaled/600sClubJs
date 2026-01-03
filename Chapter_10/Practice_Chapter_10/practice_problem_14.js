// create a function that return average value of odd numbers in an array

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    let sum = 0;
    for (const number of odds) {
        sum += number;
    }
    const cnt = odds.length;
    return (sum / cnt).toFixed(2);
};

// call the function by passing value as a parameter
const numbers = [72, 23, 4, 116, 9, 5];
console.log(oddAverage(numbers));