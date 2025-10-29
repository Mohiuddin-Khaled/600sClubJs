// The restaurant offers discount on food items depending on the customer's age

const age = 62;

if (age > 60) {
    console.log("You will get 50% discount!");
}
else if (age > 12) {
    console.log("You are child!")
    console.log("You don't have to pay for the food!")
}
else {
    console.log("You will pay the full amount of the food!");
}