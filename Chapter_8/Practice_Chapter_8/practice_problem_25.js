// create a headphone object 
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
};

// freeze the object using Object.freeze() method
Object.freeze(headphone);

// Attempt to modify the object
headphone.sound = "120 dB";

// log the modify object in the console
console.log(headphone); // 'sound' property was not added due to Object.freeze() method
