const prompt = require("prompt-sync")()

const n = parseInt(prompt("Enter a Number: "))
let sum = 0
for (let i = 0; i < n; i++) {
    const value = parseInt(prompt("Enter the Value: "))
    sum += value
}

const Mean = sum / n

console.log(Mean)
