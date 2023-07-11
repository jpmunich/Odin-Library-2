const button = document.querySelector('button');

let library = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {console.log(`This book, ${this.title}, by ${this.author} has ${this.pages} pages. It is ${this.hasRead} that I have read it!`)}
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    library.push(newBook);
    console.log(library)
}

button.addEventListener('click', () => {addBookToLibrary("a", "b", 'c', 'd')})

function updateLibrary() {
    
}

