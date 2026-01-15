/// concatenation of string

// const first = 'work';
// const last = 'flow';
// const name = first + ' ' + last + ' ' + 'clear mind';
// console.log(name);


/// add variables in string
// const a = 10;
// const b = 20;
// const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
// console.log(result);

/// special dynamic calculation
/// template string  --> backtick ` (superpower)

/// variable value sum in string
// const name = "David";
// const age = 30;
// console.log("Name: " + name + ", Age: " + age);
// console.log(`Name: ${name}, Age: ${age}`);

/// sum of expression
// const a = 10;
// const b = 20;
// const math = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(math);

/// multiline string
// const email = `John is a
// fighter boxer
// and honest man`;
// console.log(email);

/// use new line \n
// const email = 'John is a \nfighter boxer\nand honest man.';
// console.log(email);

// call the function and add string
// const getName = function () {
//     return 'karina';
// };

// const message = `moved on suporna, i will got ${getName()}`;
// console.log(message);

// add condition using ternary operator
// const age = 20;
// const status = `you are ${age >= 18 ? "Adult" : "Minor"}`;
// console.log(status);

// add object properties using string
// const user = { name: "Tariq", age: 25 };
// console.log(user);
// const info = `Name: ${user.name}, Age: ${user.age}`; // directly add object properties
// console.log(info);

// add array elements in string
// const fruits = ['Apple', 'Banana', 'Mango'];
// const second = `My second favorite fruit is: ${fruits[1]}`;
// const list = `My favorite fruits are: ${fruits.join(", ")}`;
// console.log(list);


// create dynamic HTML Template using template string
// const title = "Welcome";
// const body = "This is a dynamic template";
// const html = `<div>
//     <h1>${title}</h1>
//     <p>${body}</p>
// `;
// console.log(html);

// value calculation in string
// const radius = 5;
// const area = `Circle area is ${Math.PI * radius ** 2}`;
// console.log(area);


// mixed dynamic template string
const greet = function (name) {
    return `Hello, ${name}`;
};

console.log(greet("David"));