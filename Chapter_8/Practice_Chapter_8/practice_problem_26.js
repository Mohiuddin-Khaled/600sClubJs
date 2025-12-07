// Create a player object 
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami",
};

// freeze the object using Object.freeze() method
Object.freeze(player);

// Attempt to modify the object
player.finalist = "No";

// log the modify object in the console
console.log(player); // 'finalist' property was not added due to Object.freeze() method
