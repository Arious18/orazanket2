function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace 'your_username' and 'your_password' with the actual login credentials
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
        // You can redirect the user to another page after successful login using window.location.href
        // Example: window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
