// create a function that return the sum of two numbers using default values when arguments are not provided

const defaultSum = (a = 10, b = 5) => {
    return a + b;
};

const sum = defaultSum(6, 39);
// const sum = defaultSum();
// const sum = defaultSum(8);
console.log(sum);