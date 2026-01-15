// create an arrow function that return sum of the first and last element of an array

const getSum = (numbers) => {
    const sz = numbers.length;
    return numbers[0] + numbers[sz - 1];
};

const numbers = [4, 7, 8, 23, 67, 48];
const sum = getSum(numbers);
console.log(sum);
