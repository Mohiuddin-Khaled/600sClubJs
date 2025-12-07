// Create a laptop object that contains properties
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
};

// log the property keys and property values in the console
// use for.....in loop to iterate over an object
for (const key in laptop) {
    const value = laptop[key];
    console.log(key, value);
};

