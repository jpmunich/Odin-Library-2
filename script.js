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

Book.prototype.toggleHasRead = function() {
    if (this.hasRead === 'Unread') this.hasRead = 'Read';
    else if (this.hasRead === 'Read') this.hasRead = 'Unread';
}

function toggleHasReadText(text) {
        if (text.innerText === 'Unread') text.innerText = 'Read';
        else if (text.innerText === 'Read') text.innerText = 'Unread';
    }

function addBookToLibrary(title, author, pages, hasRead = undefined) {
    if (hasReadTheBook.checked) hasRead = 'Read';
    else hasRead = 'Unread';
    const book = new Book(title, author, pages, hasRead);
    library.push(book);
}

function removeBookFromLibrary(index) {
    library.splice(index, 1);
}

function createHasReadButton(book) {
    const hasReadBook = document.createElement('button');
    hasReadBook.dataset.index = (library.length - 1);
    hasReadBook.innerText = `${library[library.length - 1].hasRead}`;
    hasReadBook.classList.add('has-read');
    hasReadBook.addEventListener('click', () => {
        toggleHasReadText(hasReadBook);
        library[hasReadBook.dataset.index].toggleHasRead();
    })
    book.appendChild(hasReadBook);
}

function createRemoveBookButton(book) {
    const remove = document.createElement('button');
    remove.dataset.index = (library.length - 1);
    remove.innerText = `Remove`;
    remove.classList.add('remove');
    book.appendChild(remove);

    remove.addEventListener('click', () => {
        newBookContainer.removeChild(book)
        Array.from(document.getElementsByClassName('remove')).forEach(element => {
            if (remove.dataset.index < element.dataset.index) element.dataset.index--;
        })
        Array.from(document.getElementsByClassName('has-read')).forEach(element => {
            if (remove.dataset.index < element.dataset.index) element.dataset.index--;
        })
        removeBookFromLibrary(remove.dataset.index);
    })
}

function createBookElement(book, elementType, elementText) {
    const bookElement = document.createElement(elementType);
    bookElement.innerText = elementText;
    book.appendChild(bookElement);
}

function updateLibrary() {
        const newBook = document.createElement('div');
        newBook.classList.add('new-book');
        newBookContainer.appendChild(newBook);

        createBookElement(newBook, 'p', library[library.length - 1].title);
        createBookElement(newBook, 'p',  library[library.length - 1].author);
        createBookElement(newBook, 'p', `${library[library.length - 1].pages} Pages`);
        createHasReadButton(newBook);
        createRemoveBookButton(newBook);
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