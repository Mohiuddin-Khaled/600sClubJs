// create a function that convert a weight from pound to kilogram

// 1 pound = 0.453 kg
function poundToKilogram(pounds) {
    const kilograms = pounds * 0.453;
    return kilograms;
};

// call the function by passing weights as a parameter
const kilo = poundToKilogram(45);
console.log(kilo);