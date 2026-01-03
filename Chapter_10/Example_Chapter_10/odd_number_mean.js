// create a step-by-step function that return average value of odd numbers in an array

// step 1: create a basic function
// function oddAverage() {

// };

// step 2: passing an array as a parameter
// function oddAverage(numbers) {
//     for (const number of numbers) {
//         console.log(number);
//     }
// };

// const numbers = [12, 13, 65, 11, 24, 31];
// console.log(numbers);
// oddAverage(numbers);

// step 3: declare an array of odd numbers
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//     }
// };

// const numbers = [12, 13, 65, 11, 24, 31];
// oddAverage(numbers);

// step 4: log the odd numbers of an array to the console
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//     }
//     console.log(odds);
// };

// const numbers = [12, 13, 65, 11, 24, 31];
// const oddNumberAvg = oddAverage(numbers);

// step 5: calculate the sum of odd numbers in the array
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//     }
//     let sum = 0;
//     for (const number of odds) {
//         sum += number;
//     }
//     console.log(sum);
// };

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);

// step 6: calculate the average of odd numbers in the array
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//     }
//     let sum = 0;
//     for (const number of odds) {
//         sum += number;
//     }
//     const count = odds.length;
//     const avg = sum / count;
//     return avg;
// };

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('Average of the odd numbers is: ', avg);

// step 7: Test oddAverage() function using different arrays
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//     }
//     let sum = 0;
//     for (const number of odds) {
//         sum += number;
//     }
//     const count = odds.length;
//     const avg = sum / count;
//     return avg;
// };

/// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const numbers = [7];
/// const numbers = [12, 13, 65, 11, 24, 31]
// const avg = oddAverage(numbers);
// console.log('Average of the odd numbers is: ', avg);

// step 8: check if the array does not contains odd numbers
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//     }
//     let sum = 0;
//     for (const number of odds) {
//         sum += number;
//     }
//     const cnt = odds.length;
//     const avg = sum / cnt;
//     return avg;
// };

// const numbers = [72, 14, 84, 116];
// const avg = oddAverage(numbers);
// console.log('Average of the odd numbers is: ', avg); // NaN : Not a Number

// step 9: NaN(Not a Number) issue resolve  
function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    if (odds.length === 0) {
        return 0; // or another appropriate value
    }
    let sum = 0;
    for (const number of odds) {
        sum += number;
    }
    const avg = sum / odds.length; // define infinity use NaN
    return avg;
};

const numbers = [2, 4, 6, 8, 10];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is: ', avg);


