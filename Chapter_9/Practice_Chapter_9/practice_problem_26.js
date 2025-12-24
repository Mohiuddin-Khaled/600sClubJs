// Create a function that return the result of multiplying or dividing the value by 10

function multiplyOrDivide(num) {
    if (num > 10) {
        return num / 10;
    }
    else {
        return num * 10;
    }
};

// call the function by passing number as a parameter
const result = multiplyOrDivide(15);
console.log(result);