/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

let myBooks = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function updateLocalStorage() {
  localStorage.myBooks = JSON.stringify(myBooks);
  getBooks();
}

function destroyBook(id) {
  myBooks.splice(id, 1);
  updateLocalStorage();
}
