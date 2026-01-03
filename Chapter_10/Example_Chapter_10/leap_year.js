// create simple function to determine whether a year is a leap year or not

/// leap year = 366 days
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
/// call the function by passing year as a parameter
// const isLipi1 = isLeapYear(2043);
// const isLipi2 = isLeapYear(2052);
// console.log(isLipi1);
// console.log(isLipi2);

// create a complex function to determine whether a year is a leap year or not
// function isLeapYear(year) { // not handle it
//     if (year % 400 === 0) {
//         return true;
//     }
//     else if (year % 400 !== 0 && year % 100 === 0) {
//         return false;
//     }
// };

// function isLeapYear(year) {
//     if (year % 400 === 0) { // not handle it
//         return true;
//     }
//     else if (year % 100 === 0) {
//         return false;
//     }
// }

function isLeapYear(year) {
    if (year % 400 === 0) { // handle it
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
};

// call the function by passing year as a parameter 
const isLipi1 = isLeapYear(2100);
const isLipi2 = isLeapYear(2400);
const isLipi3 = isLeapYear(1900);
const isLipi4 = isLeapYear(2052);
console.log(isLipi1, isLipi2, isLipi3, isLipi4);