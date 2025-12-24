// create a function to calculate the total bill of food items

function bill(rice, curry, drinks) {
    return rice + curry + drinks;
};

const rice = 30;
const curry = 70;
const drinks = 20;
// call the function by passing the multiple food prices as parameters
console.log(bill(rice, curry, drinks));