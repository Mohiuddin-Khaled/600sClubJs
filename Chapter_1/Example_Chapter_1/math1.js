const prompt = require("prompt-sync")()

const value = prompt("Enter a Number: ")
if (value < 0) {
    console.log('Negative!')
}
else if (value > 0) {
    console.log("Positive!")
}
else {
    console.log('Zero')
}