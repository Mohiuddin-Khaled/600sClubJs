const prompt = require("prompt-sync")()

const value1 = prompt("Value1: ")
const value2 = prompt("Value2: ")
const value3 = prompt("Value3: ")

console.log(Math.max(parseInt(value1), parseInt(value2), parseInt(value3)))
console.log(Math.min(parseInt(value1), parseInt(value2), parseInt(value3)))
