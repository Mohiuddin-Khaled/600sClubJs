// create a function that convert a distance from meter to centimeter

// 1 meter = 100 centimeter
function centimeterToMeter(centimeters) {
    const meters = centimeters / 100;
    return meters;
};
// call the function by passing measurement as a parameter
const meterUnit = centimeterToMeter(3400);
console.log(meterUnit);