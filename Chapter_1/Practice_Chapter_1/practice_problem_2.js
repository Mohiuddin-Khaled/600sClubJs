// Integer, even & odd number

const prompt = require('prompt-sync')()

const n = parseInt(prompt('Enter the Size: '))

for (let i = 0; i < n; i++) {
    let value = parseFloat(prompt('Enter the value: '))
    if (Number.isInteger(value)) {
        console.log(value, 'is Integer!')
        if (value % 2 == 0) {
            console.log(value, 'is Even!')
        }
        else {
            console.log(value, 'is Odd!')
        }
    }
    else {
        console.log(value, 'is Fraction!')
    }
}   
