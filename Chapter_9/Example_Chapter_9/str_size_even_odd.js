// Create a function that checks if the length of a string is even or odd

/// step 1
// function evenSizedString(str) {
//     console.log(str);
// };
/// call function by passing the string as a parameter
// evenSizedString("Dhaka");

/// step 2
// function evenSizedString(str) {
//     const size = str.length;
//     console.log(size);
// };
// evenSizedString("Dhaka");

/// step 3
// function evenSizedString(str) {
//     const size = str.length;
//     if (size % 2 === 0) {
//         console.log("Even Size!");
//     }
//     else {
//         console.log("Odd Size!");
//     }
// };
// evenSizedString("Dhaka");

// create function that return true if string length is even or otherwise false
function evenSizedString(str) {
    const size = str.length;
    if (size % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
const isEven = evenSizedString("Human");
// console.log(isEven);

function doubleOrTriple(num, doDouble) {
    if (doDouble === true) {
        const result = num * 2;
        return result;
    }
    else {
        const result = num * 3;
        return result;
    }
};

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElement(numbers) {
    const len = numbers.length;
    return len;
}

const len = numberOfElement([12, 45, 78, 45, 121254, 4, 5]);
// console.log(len);

