document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const bookId = document.getElementById('bookId').value;
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    if (validateForm(bookId, bookName, author, price, image)) {
        const book = {
            bookId,
            bookName,
            author,
            price,
            image
        };

        addBookToList(book);
        clearForm();
    }
});

function validateForm(bookId, bookName, author, price, image) {
    const errorDiv = document.getElementById('error');
    if (errorDiv) {
        errorDiv.remove();
    }

    let isValid = true;
    let errorMessage = '';

    if (!bookId || !bookName || !author || !price || !image) {
        errorMessage = 'All fields are required.';
        isValid = false;
    } else if (isNaN(price) || price <= 0) {
        errorMessage = 'Price must be a positive number.';
        isValid = false;
    }

    if (!isValid) {
        const form = document.getElementById('bookForm');
        const errorDiv = document.createElement('div');
        errorDiv.id = 'error';
        errorDiv.className = 'error';
        errorDiv.textContent = errorMessage;
        form.appendChild(errorDiv);
    }

    return isValid;
}

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
    const errorDiv = document.getElementById('error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function removeBook(button) {
    const bookDiv = button.parentElement;
    bookDiv.remove();
}
