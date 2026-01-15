// create a function that return a person name and monthly salary

function personMoney(name = "anonymous", salary = 0) {
    return name + " " + salary;
}

// call the function by passing name and salary as parameters
// console.log(personMoney("David", 134533));

// call the function without pass name and salary as parameters
console.log(personMoney(""));