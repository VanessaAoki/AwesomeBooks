function showAllBooks() {
  document.getElementById("add-new").classList.add('hidden');
  document.getElementById("all-books").classList.remove('hidden');
  document.getElementById("contact-us").classList.add('hidden');
}

function showAddNew() {
  document.getElementById("add-new").classList.remove('hidden');
  document.getElementById("all-books").classList.add('hidden');
  document.getElementById("contact-us").classList.add('hidden');
}

function showContactUs() {
  document.getElementById("add-new").classList.add('hidden');
  document.getElementById("all-books").classList.add('hidden');
  document.getElementById("contact-us").classList.remove('hidden');
}
