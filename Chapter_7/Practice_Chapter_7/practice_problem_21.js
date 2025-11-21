// log the sum of numbers from 1 to 40 each divided by 13 to the console

let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 13 == 0) {
        // console.log(i);
        sum += i;
    }
}

console.log(sum);