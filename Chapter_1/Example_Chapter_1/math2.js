const prompt = require("prompt-sync")()
const value = prompt("Enter a Number: ")

if (value % 2 == 0) {
    console.log("Even Number!")
}
else {
    console.log("Odd Number!")
}