/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

const form = document.getElementById('form');
let myBooks = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function getBooks() {
  myBooks = JSON.parse(localStorage.myBooks);
  const books = document.getElementById('books');
  books.innerHTML = '';
  let id = 0;
  for (const book of myBooks) {
    books.innerHTML += `
    <li>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button onClick="destroyBook(${id++})">Remove</button>
    </li>`;
  }
}

function updateLocalStorage() {
  localStorage.myBooks = JSON.stringify(myBooks);
  getBooks();
}

function destroyBook(id) {
  myBooks.splice(id, 1);
  updateLocalStorage();
}

function newBook(e) {
  e.preventDefault();
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  myBooks.push(new Book(title.value, author.value));
  updateLocalStorage();
  title.value = '';
  author.value = '';
}

if (localStorage.length > 0) getBooks();
form.addEventListener('submit', newBook);
