// practice 1 page 90

// Ternary Operator

// Each customer will receive cashback based on total payment amount

let cashback;
let amount = 3200;

// wrong approach
// (amount > 3000) ? cashback = 500 : cashback = 0;

// correct approach
(cashback = amount > 3000) ? 500 : 0;

console.log(cashback); 
