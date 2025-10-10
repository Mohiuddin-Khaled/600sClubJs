// Fraction number

const prompt = require('prompt-sync')()

const n = parseInt(prompt('Enter the Size: '))

for (let i = 0; i < n; i++) {
    let value = parseFloat(prompt("Enter the Value: "))
    if (value % 1 !== 0) {
        console.log("Fraction");
    } else {
        console.log("Integer");
    }
}