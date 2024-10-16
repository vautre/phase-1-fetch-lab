function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books", {
    headers: {'Accept' : `application.json`}
  })
  .then((response) => response.json())
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});