const addBookButton = document.querySelector('.add-book');
const submitButton = document.querySelector('#submit');
const addBookScreen = document.querySelector('.add-book-screen');
const newBookContainer = document.querySelector('#new-book-container');
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
}

function addBookToLibrary(title, author, pages, hasRead = undefined) {
    if (hasReadTheBook.checked) hasRead = 'Read';
    else hasRead = 'Unread';
    const book = new Book(title, author, pages, hasRead);
    library.push(book);
}


function updateLibrary() {
        const newBook = document.createElement('div');
        newBook.classList.add('new-book');
        newBookContainer.appendChild(newBook);

        const bookTitle = document.createElement('p');
        bookTitle.innerText = library[library.length - 1].title;

        const bookAuthor = document.createElement('p');
        bookAuthor.innerText = library[library.length - 1].author;

        const bookPages = document.createElement('p');
        bookPages.innerText = `${library[library.length - 1].pages} Pages`;

        const hasReadBook = document.createElement('button');
        hasReadBook.innerText = library[library.length - 1].hasRead;
        hasReadBook.classList.add('has-read');
        hasReadBook.addEventListener('click', () => {
            if (hasReadBook.innerText === 'Unread') {hasReadBook.innerText = 'Read'}
            else if (hasReadBook.innerText === 'Read') hasReadBook.innerText = 'Unread';
        })

        const remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.classList.add('remove');
        remove.addEventListener('click', () => {newBookContainer.removeChild(newBook)})

        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(hasReadBook);
        newBook.appendChild(remove);
}

function openAddBookScreen() {
    addBookScreen.classList.remove('disappear');
    overlay.classList.remove('disappear');
}

function closeAddBookScreen() {
    addBookScreen.classList.add('disappear');
    overlay.classList.add('disappear');
}

addBookButton.addEventListener('click', openAddBookScreen);
overlay.addEventListener('click', closeAddBookScreen);
submitButton.addEventListener('click', (e) => {
    if (title.value !== "" && author.value !== "" && pages.value !== "") {
        e.preventDefault();
        closeAddBookScreen();
        addBookToLibrary(title.value, author.value, pages.value);
        updateLibrary();
    }
})