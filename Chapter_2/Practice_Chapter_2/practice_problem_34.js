// Spend the money
// Division & Modulus operation

// const prompt = require('prompt-sync')()
// const hasMoney = ParseInt(prompt("Enter the money: "));
// const eachSpend = ParseInt(prompt("Enter the each time spending money: "));

const hasMoney = 500;
const eachSpend = 75;
const totalSpendTimes = hasMoney / eachSpend;
console.log(parseInt(totalSpendTimes));

const remainMoney = (hasMoney % eachSpend);
console.log(remainMoney);