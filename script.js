const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.getElementById('bookinput');
    let author = document.getElementById('author');
    let read = document.querySelector('#notRead');
    let notRead = document.querySelector('#notRead');
    let isRead = notRead.checked ? 'Not Read' : 'Read';
    let pages = document.getElementById('pages');

    title.value = '';
    author.value = '';
    read.checked = true;
    notRead.checked = false;
    pages.value = '';
});



