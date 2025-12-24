// Create a function that return the result of num1 multiplied by num2 or the result divided by 2 if it is greater than 100

function multiplyValues(num1, num2) {
    const total = num1 * num2;
    if (total > 100) {
        return total / 2;
    }
    return total;
};

// call the function by passing the two numbers as parameters
const result = multiplyValues(10, 11);
console.log(result);