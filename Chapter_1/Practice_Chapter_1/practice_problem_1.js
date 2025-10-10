// practice 1 page 26
// Positive or negative

const prompt = require('prompt-sync')()

const n = parseInt(prompt('Enter the Size: '))

for (let i = 0; i < n; i++) {
    let value = parseFloat(prompt("Enter the Number: "))
    if (value > 0) {
        console.log(value, "is positive!")
    }
    else if (value < 0) {
        console.log(value, "is negative!")
    }
    else {
        console.log(value, "is zero(neutral)!")
    }
}