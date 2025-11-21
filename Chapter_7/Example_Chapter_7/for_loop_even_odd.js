// Even numbers: 2, 4, 6, 8, 10, 12, 14, 16...........
// Odd numbers: 1, 3, 5, 7, 9...........

// log the even numbers from 0 to 20 to the console
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        // console.log(i);
    }
}

// log the odd numbers from 0 to 20 to the console
for (let i = 0; i < 20; i++) {
    // if (i % 2 == 1) {
    //     console.log(i);
    // }
    if (i % 2 != 0) {
        // console.log(i);
    }
}

// log the odd numbers from 0 to 20 to the console without if condition
for (let i = 1; i < 20; i += 2) {
    // console.log(i);
}

// log the even numbers from 2 to 20 to the console without if condition
for (let i = 2; i < 20; i += 2) {
    // console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    // console.log(i);
}

// log the numbers from 1 to 30 each divided by 5 to the console
for (let i = 1; i <= 30; i++) {
    if (i % 5 == 0) {
        // console.log(i);
    }
}

// log the numbers from 1 to 30 each divided by 3 to the console
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        // console.log(i);
    }
}

// log the numbers from 1 to 30 each divided by 5 or 3 to the console
for (let i = 1; i <= 30; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
        // console.log(i);
    }
}


// log the numbers from 1 to 30 each divided by 3 and 5 to the console
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}