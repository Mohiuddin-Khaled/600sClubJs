// Create a animal object
const animal = {
    name: "Tiger",
    location: "Sundarban"
};

// freeze the object using Object.freeze() method
Object.freeze(animal);

// Attempt to modify the object
animal.location = "animal";

// log the modify object in the console
console.log(animal); // 'location' property value is not change due to Object.freeze() method
