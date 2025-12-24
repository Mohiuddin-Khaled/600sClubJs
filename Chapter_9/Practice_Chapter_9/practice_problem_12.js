// create a function to calculate the numbers of vegetable can be purchase within a budget

function vegetableCount(amount) {
    const vegPrice = 35;
    const vegCnt = amount / vegPrice;
    return (Math.floor(vegCnt)); // floor or bottom range value
};

// budget amount
const amount = 150;

// call the function through the parameter 
console.log(vegetableCount(amount));    