document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'index.html';
    }

    const form = document.getElementById('bookingForm');
    const tableBody = document.querySelector('#bookingTable tbody');
    const signOutButton = document.getElementById('signOutButton');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const bookTitle = document.getElementById('bookTitle').value;
        const borrowerName = document.getElementById('borrowerName').value;

        if (bookTitle && borrowerName) {
            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            const borrowerCell = document.createElement('td');

            titleCell.textContent = bookTitle;
            borrowerCell.textContent = borrowerName;

            row.appendChild(titleCell);
            row.appendChild(borrowerCell);

            tableBody.appendChild(row);

            form.reset();
        }
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('authenticated');
        window.location.href = 'index.html';
    });
});
