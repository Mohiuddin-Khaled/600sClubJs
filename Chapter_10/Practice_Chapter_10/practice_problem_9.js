// create a function that return the package delivery cost based on weight

function deliveryCost(weight) {
    if (weight < 10) { // 0 to 9 kg
        return 100;
    }
    else if (weight >= 10 && weight < 20) { // 10 to 19 kg
        return 300;
    }
    else if (weight >= 20 && weight < 50) { // 20 to 49 kg
        return 1000;
    }
    else { // up to 50 kg
        return weight * 100;
    }
};

// call the function by passing product weight as a parameter
const amount = deliveryCost(50);
console.log("BDT: " + amount);