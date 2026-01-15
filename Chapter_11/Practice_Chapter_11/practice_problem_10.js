// create a function that calculate and return tax and net salary from an object

function taxSalary(amount = { salary: 50000, tax: 10 }) {
    const taxAmount = (amount.salary * amount.tax) / 100;
    const netSalary = amount.salary - taxAmount;
    return netSalary;
};

// pass tax and salary amount as parameters
// console.log(taxSalary({ salary: 210000, tax: 10 }));

// call the function passing without parameters
console.log(taxSalary());