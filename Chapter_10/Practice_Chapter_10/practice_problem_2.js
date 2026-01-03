// create function that convert a unit from kwh to kcal

// 1 kwh = 860 kcal
function kwhToKcal(kwh) {
    const kcal = kwh * 860;
    return kcal;
};
// call the function by passing energy value as a parameter
const kcalUnit = kwhToKcal(12);
console.log(kcalUnit);

