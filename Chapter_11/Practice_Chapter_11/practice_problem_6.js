// create a function that receive a list of books

function bookList(books = ['JS book']) {
    for (const book of books) {
        console.log(book);
    }
}

// pass a book list as a parameter
bookList(['Harry Potter', 'DS book', 'Algo book']);

// call the function without passing a parameter
// bookList();
