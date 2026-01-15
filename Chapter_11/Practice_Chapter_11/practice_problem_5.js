// create a function that received product name and price 

function product(name = "Unknown product", price = 1) {
    console.log(name);
    console.log(price);
}

// pass product name and price as parameter
product("Hp Mouse", 1250);

// call function pass without parameters
product();