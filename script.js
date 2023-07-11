const addBookButton = document.querySelector('.add-book');
const submitButton = document.querySelector('#submit');
const addBookScreen = document.querySelector('.add-book-screen');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const hasRead = document.querySelector('#has-read');
const overlay = document.querySelector('.overlay');

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

addBookButton.addEventListener('click', () => {
    addBookScreen.classList.remove('disappear');
    overlay.classList.remove('disappear');
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBookScreen.classList.add('disappear');
    overlay.classList.add('disappear');
    addBookToLibrary(title.value, author.value, pages.value, hasRead.isChecked);
})

function updateLibrary() {
    
}

