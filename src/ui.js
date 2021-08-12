/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { DateTime } = luxon;

function showAllBooks() {
  document.getElementById('add-new').classList.add('hidden');
  document.getElementById('all-books').classList.remove('hidden');
  document.getElementById('contact-us').classList.add('hidden');
  document.getElementById('list-link').classList.add('highlight');
  document.getElementById('add-new-link').classList.remove('highlight');
  document.getElementById('contact-link').classList.remove('highlight');
}

function showAddNew() {
  document.getElementById('add-new').classList.remove('hidden');
  document.getElementById('all-books').classList.add('hidden');
  document.getElementById('contact-us').classList.add('hidden');
  document.getElementById('list-link').classList.remove('highlight');
  document.getElementById('add-new-link').classList.add('highlight');
  document.getElementById('contact-link').classList.remove('highlight');
}

function showContactUs() {
  document.getElementById('add-new').classList.add('hidden');
  document.getElementById('all-books').classList.add('hidden');
  document.getElementById('contact-us').classList.remove('hidden');
  document.getElementById('list-link').classList.remove('highlight');
  document.getElementById('add-new-link').classList.remove('highlight');
  document.getElementById('contact-link').classList.add('highlight');
}

setInterval(() => {
  document
    .getElementById('display-date')
    .innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
}, 1000);
