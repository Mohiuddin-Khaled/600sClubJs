// create a function that return a value that multiplies by 20 if the number is less than 20 otherwise divided by 20

function dividedOrMultiply20(num) {
    if (num < 20) {
        return num * 2;
    }
    else {
        return num / 20;
    }
};

// call the function by passing the number as a parameter
const num = 32;
console.log(dividedOrMultiply20(num));