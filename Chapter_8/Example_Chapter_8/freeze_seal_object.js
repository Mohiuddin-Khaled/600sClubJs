// don't change any property keys or values of an object
// use Object.freeze()
// doesn't allow access, delete, update the properties of an object 

// create an adminUser object
const adminUser = {
    username: "admin",
    email: "admin@example.com",
    role: "superadmin"
};

// freeze the object and don't change any properties
Object.freeze(adminUser);

// attempt to modify the object properties 
adminUser.role = "user"; // access property key and value using dot notation
adminUser.password = "123456";
delete adminUser.email; // try to delete specific object properties

// log the updated object properties in the console 
console.log(adminUser); // don't get the expected output

// use Object.seal()
// doesn't allow delete the properties of an object
// specific property can access & update
const user = {
    username: "johndoe",
    email: "john.doe@example.com",
    password: "oldpassword"
};

// seal the object and change as specific properties
Object.seal(user);
// attempt to modify the object
user.password = "newpassword"; // allowed
user.age = 30; // adding new properties is not allowed
delete user.email; // deleting property is not allowed
console.log(user);
