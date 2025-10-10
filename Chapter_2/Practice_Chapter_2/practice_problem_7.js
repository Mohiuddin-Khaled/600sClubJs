// Total digits sum of contact number

const prompt = require("prompt-sync")()

const n = parseInt(prompt("Enter the size of contact No. "))

let total = 0

for (let i = 0; i < n; i++) {
    let value = parseInt(prompt("Enter the digit: "))
    total += value
}

console.log(total)