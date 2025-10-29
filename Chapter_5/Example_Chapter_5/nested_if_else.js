// Nested if-else condition

/* structure
    if(condition){
        console.log();
        if(condition){
            console.log();
        }
    }
    else{
        console.log();
    }
*/

const money = 300;
const popcornPrice = 40;
if (money >= 300) {
    console.log("Going to watch a movie!");
    if (popcornPrice <= 50) {
        console.log("Buying PopCorn!");
    }
    else {
        console.log("PopCorn is Expensive!");
    }
}
else {
    console.log("Home Alone!");
}