// practice 1 page 169

// create a function that return the tax percentage based on the income amount

function incomeToTax(amount) {
    if (amount <= 50000) { // up to $50000
        return 10;
    }
    else if (amount >= 50001 && amount <= 100000) { // $50001 to $100000
        return 20;
    }
    else if (amount >= 100001 && amount <= 200000) { // $100001 to $200000
        return 30;
    }
    else { // above $200000
        return 40;
    }
};

// call the function by passing income amount as a parameter
const rate = incomeToTax(100000); // receive tax rate from function
console.log(rate + "%");
