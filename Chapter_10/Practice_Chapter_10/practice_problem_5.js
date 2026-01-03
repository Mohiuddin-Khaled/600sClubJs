// create a function that converted a distance from inch to centimeter

// 1 inch = 2.54 centimeter
function inchToCentimeters(inches) {
    const cents = inches * 2.54;
    return cents;
};
// call the function by passing distance as a parameter
const centValue = inchToCentimeters(56);
console.log(centValue);