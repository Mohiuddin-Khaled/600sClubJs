// practice 1 page 157

// create a function that returns whether the number of elements in array is even or odd
function arraySizedEvenOdd(numbers) {
    const len = numbers.length;
    if (len % 2 === 0) {
        console.log("Even sized array");
    }
    else {
        console.log("Odd sized array");
    }
};

// call the function by passing the array
arraySizedEvenOdd([12, 45, 78, 45, 121254, 4, 5]);