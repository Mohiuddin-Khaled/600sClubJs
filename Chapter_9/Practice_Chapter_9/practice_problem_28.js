// create a function that return whether the value of n should be multiply by 2 if positive or by 3 if negative
function twoOrThree(n) {
    if (n > 0) {
        return n * 2;
    }
    else if (n < 0) {
        return n * 3;
    }
    else {
        return n;
    }
};

// call the function by passing the number as a parameter
const result = twoOrThree(-5);
console.log(result);