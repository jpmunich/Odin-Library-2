const addBookButton = document.querySelector('.add-book');
const submitButton = document.querySelector('#submit');
const addBookScreen = document.querySelector('.add-book-screen');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const hasReadTheBook = document.querySelector('#has-read');
const overlay = document.querySelector('.overlay');

let library = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {console.log(`This book, ${this.title}, by ${this.author} has ${this.pages} pages. It is ${this.hasRead} that I have read it!`)}
}

function addBookToLibrary(title, author, pages) {
    let hasRead = undefined;
    if (hasReadTheBook.checked) hasRead = true;
    else hasRead = false;
    const newBook = new Book(title, author, pages, hasRead);
    library.push(newBook);
    console.log(library)
}

function updateLibrary() {
    library.forEach(book => {
        const newBook = document.createElement('div');
        newBook.classList.add('new-book');
        document.body.appendChild(newBook);

        const bookTitle = document.createElement('p');
        bookTitle.innerText = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.innerText = book.author;

        const bookPages = document.createElement('p');
        bookPages.innerText = `${book.pages} Pages`;

        const hasReadBook = document.createElement('button');
        hasReadBook.innerText = book.hasRead;

        const remove = document.createElement('button');
        remove.innerText = 'remove';

        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(hasReadBook);
        newBook.appendChild(remove);
    })
}

addBookButton.addEventListener('click', () => {
    addBookScreen.classList.remove('disappear');
    overlay.classList.remove('disappear');
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBookScreen.classList.add('disappear');
    overlay.classList.add('disappear');
    addBookToLibrary(title.value, author.value, pages.value);
    updateLibrary();
})

