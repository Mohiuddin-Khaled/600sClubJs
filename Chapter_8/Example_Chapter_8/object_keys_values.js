// object : key & value pair
// properties define an object
// property name is Key
// property value is Value

// create a computer object
const computer = {
    brand: 'Lenovo',
    price: 35000,
    processor: 'Intel',
    ssd: '512 GB'
};

// all properties name can be accessed from an object
const keys = Object.keys(computer);
// console.log(keys);

// all properties value can be accessed from an object
const values = Object.values(computer);
// console.log(values);

// Create a profile object
const profile = {
    name: "Rahim",
    age: 28,
    city: "Dhaka"
};

// check the specific property in an object
// const profileKey = Object.keys(profile);
// const hasName = profileKey.includes('name');
// console.log(hasName);

// check specific properties in object using if - else condition
// if ("email" in profile) {
//     console.log("email exists");
// } else {
//     console.log("No email. No spam.")
// }

// check object property
// if (profile.hasOwnProperty("email")) {
//     console.log("Email Exists!");
// }
// else {
//     console.log("No Email!");
// }

// check the property value
// check value and type --> ===
if (profile.city === "Dhaka") {
    console.log("Capital of Bangladesh!");
}
else {
    console.log("Division of Bangladesh!");
}

