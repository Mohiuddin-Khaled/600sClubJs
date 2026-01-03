// practice 1 page 177

// create a function that return unique array with no duplicate values
function noDuplicateNumber(numbers) {
    const unique = [];
    for (const item of numbers) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
};

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const uniqueArray = noDuplicateNumber(numbers);
console.log(uniqueArray);


