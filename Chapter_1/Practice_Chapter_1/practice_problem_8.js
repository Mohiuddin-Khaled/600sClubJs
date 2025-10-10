// Compare two value

const prompt = require('prompt-sync')()

let n = parseInt(prompt('Enter the Size: '))

for (let i = 0; i < n; i++) {
    let value1 = parseFloat(prompt("Enter the Value1: "))
    let value2 = parseFloat(prompt('Enter the Value2: '))

    if (value1 > value2) {
        console.log("True!")
    }
    else {
        console.log("False!")
    }
}