// log the numbers from 1 to 25 in the console but skip the numbers that are divisible by 3

for (let i = 1; i <= 25; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}