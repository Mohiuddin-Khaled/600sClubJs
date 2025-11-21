// Use a while loop to calculate the sum from 21 to 50 and log each summation step to the console

let num = 21;
let sum = 0;
while (num <= 50) {
    console.log(sum, " + ", num, " = ", num + sum);
    sum += num;
    num++;
}