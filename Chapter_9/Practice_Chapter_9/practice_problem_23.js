// create a function check if number is negative or not.
// if number is negative then the return value is multiplied by -1.

function negToPos(num) {
    if (num < 0) { // negative number
        return num * (-1);
    }
    return num; // positive number
};

// call the function by passing number as a parameter
const value = -5;

console.log(negToPos(-5)); // return the number converted to a positive value 