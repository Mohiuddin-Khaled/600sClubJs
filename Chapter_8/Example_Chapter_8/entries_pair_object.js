// property pair of object
// object entries

// create a person object 
const person = {
    name: "Alice",
    age: 25,
    country: "Bangladesh"
};

// property pair or entries of object
const entries = Object.entries(person);

// output format is two dimensional array or array of array
// console.log(entries);

// loop over the object
// access the object properties using a loop
// for ..... in loop
// for....in loop similar to for....of loop
// array use for.....of loop
// object use for....in loop
const profile = {
    name: "Rahim",
    age: 28,
    city: "Dhaka"
};

// property name is loop variable
// for.....in loop (object)
for (const key in profile) { // key
    const value = profile[key]; // value
    // console.log(key, value); // key & value pair
};

// for....of loop (array)
const keys = Object.keys(profile); // array of properties 
for (const key of keys) {
    console.log(key, profile[key]);
}
