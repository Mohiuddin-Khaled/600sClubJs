// create a function that return each array element multiplied by 2

function arrayMultiplied(ar = [5, 10, 15]) {
    const arr = [];
    for (const num of ar) {
        arr.push(num * 2);
    }
    console.log(arr);
};

// pass an array as a parameter
// arrayMultiplied([34, 43, 56, 3, 34, 3]);

// call the function passing without parameter
arrayMultiplied();
