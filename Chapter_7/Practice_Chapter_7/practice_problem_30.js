// log the numbers from 91 to 120 but stop the console when a number is divisible by 10

for (let num = 91; num <= 120; num++) {
    if (num % 10 == 0) {
        break;
    }
    console.log(num);
}