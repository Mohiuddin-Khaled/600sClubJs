// find the area of circle/disc

const prompt = require('prompt-sync')()

let r = parseFloat(prompt("Enter the Radius: "))

let area = Math.PI * r * r

console.log(area.toFixed(2))