// create an arrow function that return amount of an object are multiplied by 5

const info = {
    name: "David",
    amount: 45
};

const value = (obj) => {
    return obj.amount / 5;
};

console.log(value(info));