// log the numbers from 1 to 15 in the console but skip the number 9

for (let i = 1; i <= 15; i++) {
    if (i == 9) {
        continue;
    }
    console.log(i);
}