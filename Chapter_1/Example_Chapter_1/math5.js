const prompt = require("prompt-sync")()

// const value1 = prompt("Enter a Number: ")
// const value2 = prompt("Enter a Number: ")

// if (value1 > value2) {
//     console.log(value1, "is grater than", value2)
// }
// else {
//     console.log(value2, "is less than", value1)
// }
const value = prompt("Enter a Number: ")
const Percent = prompt("Enter a Percent Value: ")

const result = value * (Percent / 100)
console.log(result)
