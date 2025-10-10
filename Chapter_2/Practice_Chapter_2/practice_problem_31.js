// Spend the money
// Division & Modulus operation

// const prompt = require('prompt-sync')()
// const hasMoney = ParseInt(prompt("Enter the money: "));
// const eachSpend = ParseInt(prompt("Enter the each time spending money: "));

const hasMoney = 60;
const eachSpend = 15;
const totalSpendTimes = hasMoney / eachSpend;
console.log(totalSpendTimes);
const remainMoney = (hasMoney % eachSpend);
console.log(remainMoney);