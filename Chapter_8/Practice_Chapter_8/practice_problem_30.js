// Create a food object 
const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
};

// seal the object using Object.seal() method
Object.seal(food);

// not allowed to adding new property
food.rating = "*****";

// allowed to change a property value
food.price = 400;

// log the object in the console
console.log(food); // 'rating' property was not added due to Object.seal() method

