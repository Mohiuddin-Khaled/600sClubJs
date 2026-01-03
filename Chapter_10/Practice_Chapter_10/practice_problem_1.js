// practice 1 page 166

// create a function that convert a distance from yards to miles

// 1760 yards = 1 mile
function mileToYards(mile) {
    const yards = mile * 1760;
    return yards;
};

// call the function by passing distance value as a parameter
const distanceYards = mileToYards(13);
console.log(distanceYards);