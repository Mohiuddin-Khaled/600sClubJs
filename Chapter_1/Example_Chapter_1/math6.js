const prompt = require("prompt-sync")()

const value1 = prompt("Enter a Number: ")
const value2 = prompt("Enter a Number: ")
const value3 = prompt("Enter a Number: ")

const Summation = parseFloat(value1) + parseFloat(value2) + parseFloat(value3)
console.log(Summation)