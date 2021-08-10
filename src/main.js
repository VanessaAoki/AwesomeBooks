/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

// import { Book } from './book.js';

const form = document.getElementById('form');
class BookList {
  constructor() {
    this.books =
      localStorage.myBooks != null ? JSON.parse(localStorage.myBooks) : [];
    form.addEventListener('submit', this.newBook);
  }

  renderBooks() {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;
    for (const book of this.books) {
      books.innerHTML += `
      <li>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button onClick="myBooks.destroyBook(${id++})">Remove</button>
      </li>`;
    }
  }

  updateLocalStorage() {
    localStorage.myBooks = JSON.stringify(this.books);
    this.renderBooks();
  }

  destroyBook(id) {
    this.books.splice(id, 1);
    this.updateLocalStorage();
  }

  newBook(e) {
    e.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    this.books.push({ title: title.value, author: author.value });
    this.updateLocalStorage();
    title.value = '';
    author.value = '';
  }
}

const myBooks = new BookList();

myBooks.renderBooks();
