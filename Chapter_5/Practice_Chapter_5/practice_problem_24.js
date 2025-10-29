// I will offer tea or biscuits to the guest who comes to my house


const isGuest = true;
const haveTea = true;
const haveBiscuit = true;

if (isGuest && haveTea) {
    console.log("Will you all have tea?");
    if (haveTea) {
        console.log("Will you all have biscuits with your tea?");
    }
    else {
        console.log("Only tea is ready!");
    }
}
else {
    console.log("You all sit and watch Star Jalsha!")
}