// create a function that return product price from an object

function productPrice(product = { price: 10, quantity: 1 }) {
    const totalPrice = product.price * product.quantity;
    console.log(totalPrice);
}

// pass product price and quantity as parameters
productPrice({ price: 25, quantity: 5 });

// call function passing without parameter
// productPrice(); 