// Log the values from 0 up to 15 to the console
for (let i = 0; i < 15; i++) {
    // console.log(i);
    if (i > 7) { // Stop when the value is greater than 7
        break;
    }
}

for (let i = 0; i < 15; i++) {
    // console.log(i);
    if (i >= 7) { // Stop when the value is equal to or greater than 7
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i == 6) { // Skip the specific value 6
        continue;
    }
    // console.log(i);
}

// Log the odd numbers to the console
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) { // Skip the even numbers
        continue;
    }
    // console.log(i);
}

// Log the even numbers to the console
for (let i = 1; i < 10; i++) {
    if (i % 2 == 1) { // Skip the odd numbers
        continue;
    }
    // console.log(i);
}
