const prompt = require('prompt-sync')()

const n = parseInt(prompt('Enter a Number: '))

// for (let i = 1; i <= n; i++) {
//     console.log(i)
// }

// for (let i = 21; i <= n; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }

for (let i = 113; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}