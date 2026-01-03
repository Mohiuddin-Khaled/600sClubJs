// logic build up technique
// measurement of height
// feet converted to inch

// 12 inch = 1 feet
// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet;
// };

// const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

// feet converted to inch
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch";
    return result;
};

const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight);


// mile converted to kilometer
// 1 mile = 1.60934 kilometer
// function mileToKilometer(mile) {
//     const kilo = mile * 1.60934;
//     return kilo.toFixed(2) + " k.m.";
// };
// const distanceKm = mileToKilometer(56);
// console.log(distanceKm);

// kilometer converted to mile

function kiloToMile(km) {
    const mile = km / 1.60934;
    return mile.toFixed(2) + " mile";
};
const distanceMile = kiloToMile(1475);
console.log(distanceMile);
