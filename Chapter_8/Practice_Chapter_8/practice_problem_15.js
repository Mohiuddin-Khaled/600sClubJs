// Create a collage object that contains objects 
const family = {
    father: { // object of object
        name: "Giash Uddin",
        age: 54,
        profession: "Businessman"
    },
    mother: { // object of object
        name: "Morzina Akter",
        age: 45,
        profession: "Teacher"
    }
};
// dot & bracket notation
const fatherAge = family.father['age'];
const motherAge = family.mother['age'];

console.log(fatherAge + motherAge);

