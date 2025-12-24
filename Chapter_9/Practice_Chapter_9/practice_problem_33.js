// create a function that return the age from a given age number

function personAge(age) {
    if (age < 18) {
        return 18;
    }
    else if (age > 45) {
        return 45;
    }
    else {
        return age;
    }
};

// call the function by passing the age as a parameter
const num = 17;
const age = personAge(num);
console.log(age);