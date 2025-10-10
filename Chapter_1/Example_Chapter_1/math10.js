const prompt = require("prompt-sync")()

const l = parseInt(prompt("Enter a height: "))
const b = parseInt(prompt("Enter a Width"))

const area = (1 / 2) * l * b

console.log(area)