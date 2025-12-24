// create a function that returns true or false based on whether the number is divided by 13
function divided13(num) {
    if (num % 13 === 0) {
        return true;
    }
    return false;
}

// call the function by passing number as a parameter
console.log(divided13(45));