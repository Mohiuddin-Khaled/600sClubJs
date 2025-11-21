// log the number from 1 to 20 in the console but skip the number 12

for (let i = 1; i <= 20; i++) {
    if (i === 12) {
        continue;
    }
    console.log(i);
}