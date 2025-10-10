// Find the mean

const prompt = require('prompt-sync')()

let n = parseInt(prompt("Enter the Size: "))

let sum = 0

for (let i = 0; i < n; i++) {
    let value = parseFloat(prompt("Enter the Value: "))
    sum += value
}

console.log(sum / n)