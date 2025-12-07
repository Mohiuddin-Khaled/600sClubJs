// Create a numbers object that contains numbers
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

// Summation of property values
let sum = 0;
for (const key in numbers) {
    sum += numbers[key];
}
// log the total sum value in the console
console.log(sum);