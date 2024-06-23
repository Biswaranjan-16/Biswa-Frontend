document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const bookId = document.getElementById('bookId').value;
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const book = {
        bookId,
        bookName,
        author,
        price,
        image
    };

    addBookToList(book);
    clearForm();
});

function addBookToList(book) {
    const bookList = document.getElementById('bookList');

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `
        <img src="${book.image}" alt="Book Image">
        <div class="book-details">
            <span><strong>ID:</strong> ${book.bookId}</span>
            <span><strong>Name:</strong> ${book.bookName}</span>
            <span><strong>Author:</strong> ${book.author}</span>
            <span><strong>Price:</strong> $${book.price}</span>
        </div>
        <button onclick="removeBook(this)">Remove</button>
    `;

    bookList.appendChild(bookDiv);
}

function clearForm() {
    document.getElementById('bookForm').reset();
}

function removeBook(button) {
    const bookDiv = button.parentElement;
    bookDiv.remove();
}
