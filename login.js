let userr=alert("Type username ==user and Password ==password");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signInForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'password') {
            localStorage.setItem('authenticated', 'true');
            window.location.href = 'booking.html';
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
