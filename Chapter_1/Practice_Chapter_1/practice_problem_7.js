// Division & remainder/modulus operations

const prompt = require("prompt-sync")()

let value = parseFloat(prompt("Enter the Amount: "))
let person = parseInt(prompt("Enter the Persons: "))

// console.log(parseInt(value / person))
console.log(value % person)