// create a function that return simple interest from an object using a formula

function simpleInterest(obj = { principal: 1000, rate: 5 }) {
    const interest = (obj.principal * obj.rate) / 100;
    return interest;
};

// pass object as a parameters
// console.log(simpleInterest({ principal: 30000, rate: 5 }));

// call the function passing without parameters
console.log(simpleInterest());