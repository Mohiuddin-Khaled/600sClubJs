// Create a phone object that contains properties
const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
};

// Access the object property keys
const keys = Object.keys(phone);
// log the property keys and property values in the console
// use for......of loop to iterate over an array
for (const key of keys) {
    console.log(key, phone[key]);
};