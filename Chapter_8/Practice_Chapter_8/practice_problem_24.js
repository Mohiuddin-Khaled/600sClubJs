// Create a building object that contains properties

const building = {
    floors: 10,
    address: { // object of object
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
};

// log the property values in the console
for (const key in building) {
    const value = building[key];
    console.log(key, ": ", value);
};  