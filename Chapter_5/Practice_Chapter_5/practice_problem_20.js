// Categories book based on number of pages

const pageNumber = 140;

if (pageNumber > 500) {
    console.log("Heart-attack size book!");
}
else if (pageNumber >= 100 && pageNumber <= 500) {
    console.log("Mid-size book!");
}
else {
    console.log("Small book");
}