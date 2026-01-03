// practice 1 page 175

// create a function that return average value of even numbers in an array
function evenAverage(numbers) {
    const even = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number);
        }
    }
    let sum = 0;
    for (const number of even) {
        sum += number;
    }
    const cnt = even.length;
    return (sum / cnt).toFixed(2);
};

// call the function by passing array as a parameter
const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = evenAverage(numbers);
console.log(avg);
