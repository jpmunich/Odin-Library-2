let library = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {console.log(`This book, ${this.title}, by ${this.author} has ${this.pages} pages. It is ${this.hasRead} that I have read it!`)}
}


