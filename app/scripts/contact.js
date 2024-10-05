// Form Validation
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(message => {
            message.textContent = '';
            message.style.display = 'none';
        });

        // Reset input borders
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('invalid');
            input.removeAttribute('aria-invalid');
        });

        // Validate fields
        let isValid = true;

        const validations = [
            {
                field: 'name',
                message: 'Please enter your name.'
            },
            {
                field: 'email',
                message: 'Please enter your email.',
                additionalCheck: (value) => isValidEmail(value.trim()),
                additionalMessage: 'Please enter a valid email address.'
            },
            {
                field: 'phone',
                message: 'Please enter your phone number.'
            },
            {
                field: 'message',
                message: 'Please enter your message.'
            }
        ];

        validations.forEach(validation => {
            const field = document.getElementById(validation.field);
            const value = field.value.trim();

            if (value === '') {
                showError(field, validation.message);
                isValid = false;
            } else if (validation.additionalCheck && !validation.additionalCheck(value)) {
                showError(field, validation.additionalMessage);
                isValid = false;
            }
        });

        // If all fields are valid, submit the form
        if (isValid) {
            alert('Thank you for contacting us!');
            form.reset();
        }
    });

    // Show error message function
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');
        errorDisplay.textContent = message;
        errorDisplay.style.display = 'block';
        input.classList.add('invalid');
        input.setAttribute('aria-invalid', 'true');
    }

    // Email validation function
    function isValidEmail(email) {
        // Simple email regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}