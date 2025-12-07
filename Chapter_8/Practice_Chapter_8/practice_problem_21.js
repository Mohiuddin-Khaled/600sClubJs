// Create a books object that contains properties
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
};

// log the property values in the console
for (const keys in books) {
    const value = books[keys];
    console.log(value);
};
