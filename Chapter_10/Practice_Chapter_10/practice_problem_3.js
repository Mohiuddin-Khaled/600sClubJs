// create a function that convert a time from hours to seconds

// 1 hour = 60 minute
// 1 minute = 60 second

function hourToSeconds(hours) {
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return seconds;
};
// call the function by passing hours value as a parameter 
const secondsUnit = hourToSeconds(3);
console.log(secondsUnit);

