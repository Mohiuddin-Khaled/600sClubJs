// Rice quantity 
// Rice spend
// Division & Multiplication Operation

// const prompt = require("prompt-sync")()
// const eachDayEat = parseFloat(prompt("Enter the quantity of rice each day eating: "));
// const availableRice = parseFloat(prompt("Enter the available rice quantity: "));

const availableRice = 480;
const eachDayEat = 4;
const eachMonth = 30;

const spendMonthCount = availableRice / (eachDayEat * eachMonth);

console.log(spendMonthCount);