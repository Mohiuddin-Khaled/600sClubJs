// swap two variables
// let a = 5;
// let b = 7;
// console.log(a, b);
// a = b;
// b = a;
// console.log(a, b);

// temporary variable technique
let a = 5;
let b = 7;
console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b);