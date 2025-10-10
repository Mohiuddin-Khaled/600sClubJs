// String converted to number

// const fatherAge = '50';
// const songAge = '20';
// const totalAge = fatherAge + songAge;
// console.log(totalAge);

const Sugar = parseInt('20');
console.log(Sugar);

const fatherAge = '50';
const fatherAgeNumber = parseInt(fatherAge);
console.log(fatherAgeNumber);

// NaN --> Not a Number

const input = 'x20';
const num = parseInt(input);
console.log(num);

// const age = parseInt('adfasdfasdf');
// const weight = parseInt('twenty');
// console.log(age, weight);

const age = parseInt('50f');
const weight = parseInt('9twenty');
// const address = parseInt('tom60');
console.log(age, weight, address);

// const sugar = parseInt('1.22222');
// console.log(sugar);

const sugar = parseFloat('1.22222');
console.log(sugar);

// toFixed() --> get fixed digit number

// const first = 12.13568;
// const second = 31.22564;
// const total = first + second;
// console.log(total.toFixed(2));

// toFixed() --> fixed digit number is string
// console.log(typeof total.toFixed(2));

const first = 12.13568;
const second = 31.22564;
const total = first + second;

// toFixed() --> fixed digit string converted to number
const totalNumber = parseFloat(total.toFixed(2));
// console.log(totalNumber);
// console.log(typeof totalNumber);
