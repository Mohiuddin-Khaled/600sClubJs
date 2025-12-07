// Create a book object
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 500
};

// seal the object using Object.seal() method
Object.seal(book);

// Attempt to modify the object
book.author = "Jake John";

// log the modify object in the console
console.log(book); // 'author' property is change due to Object.seal() method
