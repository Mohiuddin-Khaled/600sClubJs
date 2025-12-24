// create a function to return the selling price each product

function buySellPrice(itemPrice) {
    const profitPrice = 250;
    const sellPrice = itemPrice + profitPrice;
    console.log(sellPrice);
};

// call the function by passing the actual product price 
buySellPrice(1200);