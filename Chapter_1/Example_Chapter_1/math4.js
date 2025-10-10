const prompt = require("prompt-sync")()

const value1 = prompt("Enter a Number: ")
const value2 = prompt("Enter a Number: ")
console.log(parseInt(value1) + parseInt(value2))
console.log(parseInt(value1) - parseInt(value2))
console.log(parseInt(value1) * parseInt(value2))
console.log(parseInt(value1) / parseInt(value2))
console.log(parseInt(value1) % parseInt(value2))