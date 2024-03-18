function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Validation criteria
    let isValid = true;
    const errorMessages = [];

    // Validate Full Name
    if (fullName.length < 5) {
        isValid = false;
        errorMessages.push('Name must be at least 5 characters long');
    }

    // Validate Email ID
    if (!email.includes('@')) {
        isValid = false;
        errorMessages.push('Enter a valid email address');
    }

    // Validate Phone Number
    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        isValid = false;
        errorMessages.push('Enter a valid 10-digit phone number');
    }

    // Validate Password
    if (password.length < 8 || password === 'password' || password === fullName) {
        isValid = false;
        errorMessages.push('Password must be at least 8 characters long and cannot be "password" or your name');
    }

    // Confirm Password
    if (password !== confirmPassword) {
        isValid = false;
        errorMessages.push('Passwords do not match');
    }

    // Display error messages
    if (!isValid) {
        const errorMessageContainer = document.getElementById('errorMessages');
        errorMessages.forEach(message => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = message;
            errorMessageContainer.appendChild(errorMessage);
        });
    } else {
        // Form is valid, can proceed with submission
        alert('Form submitted successfully');
        
    }
}
