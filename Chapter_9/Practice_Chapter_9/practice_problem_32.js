// create a function that return the smaller number between first two elements of an array

function smallNumber(numbers) {
    if (numbers[0] < numbers[1]) {
        return numbers[0];
    }
    else {
        return numbers[1];
    }
};

// call the function by passing an array as a parameter
const numbers = [20, 45, 78];
const small = smallNumber(numbers);
console.log(small);