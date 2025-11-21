// log the numbers from 1 to 40 in the console but skip the number that is divisible by 7

for (let i = 1; i <= 40; i++) {
    if (i % 7 == 0) {
        continue;
    }
    console.log(i);
}