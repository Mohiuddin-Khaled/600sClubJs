// create a function to check whether a person is eligible to vote

function voterOrNot(age) {
    if (age > 18) {
        return "Eligible for voting!";
    }
    else {
        return "Not Eligible!";
    }
};

// call the function by passing age as a parameter
console.log(voterOrNot(19));