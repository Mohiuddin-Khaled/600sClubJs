// Ternary Operator

/* structure
    (Condition)? True Expression : False Expression;
   or
    Variable = Condition ? True Expression : False Expression;
*/

// const age = 18;
// if (age >= 18) {
//     console.log("Vote for the hot!")
// }
// else {
//     console.log("You are not eligible to vote!")
// }

// if-else shortcut
// const age = 18;
// Ternary Operator
// (age >= 18) ? console.log("Eligible") : console.log("Not Eligible");

let price = 500;
let isLeader = false;
// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);

// Shortcut Ternary Operator
(price = (isLeader === true)) ? price : price + 100;
console.log(price);

(price = isLeader) ? 0 : price + 100;
console.log(price);

(price = (isLeader === false)) ? 0 : price + 100;
console.log(price);

(price = (!isLeader)) ? 0 : price + 100;
console.log(price);

// if (!isLeader) {
//     console.log("price");
// }
