// Form Validation
// Select the form element with the id 'contactForm'
const form = document.getElementById('contactForm');

// Check if the form exists on the page (to avoid errors on pages without the form)
if (form) {
    // The addEventListener ensures that the form validation occurs when the user tries to submit the form. 
    // By preventing the default form submission, 
    // it gives the script control over validating the fields 
    // and showing appropriate error messages before allowing the form to be submitted. 
    // This approach also improves user experience 
    // by providing instant feedback on invalid inputs.
    // Add a 'submit' event listener to the form
    form.addEventListener('submit', function(event) {
        
        // Prevent the default form submission behavior
        // This stops the form from being submitted and allows us to validate the inputs
        event.preventDefault();

        // Clear previous error messages
        // Find all elements with the class '.error-message' and reset them
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(message => {
            message.textContent = '';  // Clear the error text
            message.style.display = 'none';  // Hide the error message element
        });

        // Reset the borders and error states of all input and textarea fields
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('invalid');  // Remove any 'invalid' class from previous validations
            input.removeAttribute('aria-invalid');  // Remove 'aria-invalid' for accessibility if it was set
        });

        // Assume the form is valid initially
        let isValid = true;

        // Define an array of validation rules for each field
        // Each object contains a 'field' (element id), a 'message' (error message to show),
        // and optionally an additional check with a custom error message
        const validations = [
            {
                field: 'name',
                message: 'Please enter your name.',
                //The regular expression /^[a-zA-Z\s]+$/ ensures that only alphabets 
                //(both lowercase and uppercase) and spaces are allowed.
                additionalCheck: (value) => /^[a-zA-Z\s]+$/.test(value.trim()), // Validate that only letters and spaces are allowed
                additionalMessage: 'Name should only contain letters and spaces.'
            },
            {
                field: 'email',
                message: 'Please enter your email.',
                additionalCheck: (value) => isValidEmail(value.trim()),  // Validate email format
                additionalMessage: 'Please enter a valid email address.'
            },
            {
                field: 'phone',
                message: 'Please enter your phone number.',
                //The regular expression /^[0-9]+$/ ensures that only digits are allowed 
                //(no spaces, dashes, or special characters).
                additionalCheck: (value) => /^[0-9]+$/.test(value.trim()),  // Validate that only numbers are allowed
                additionalMessage: 'Phone number should contain only numbers.'
            },
            {
                field: 'message',
                message: 'Please enter your message.',
                // The regular expression /^[a-zA-Z0-9\s]+$/ ensures that 
                //only alphanumeric characters and spaces are allowed, 
                //and no special characters like @, #, or ! are permitted.
                additionalCheck: (value) => /^[a-zA-Z0-9\s]+$/.test(value.trim()),  // Validate that no special characters are allowed
                additionalMessage: 'Message should not contain special characters.'
            }
        ];

        // Loop through the validation rules and validate each field
        validations.forEach(validation => {
            const field = document.getElementById(validation.field);  // Get the field by its id
            const value = field.value.trim();  // Get the trimmed value of the field (removing extra spaces)

            // If the field is empty, show the default error message
            if (value === '') {
                showError(field, validation.message);
                isValid = false;  // Mark the form as invalid
            } 
            // If there's an additional validation check (e.g., email format), validate it
            else if (validation.additionalCheck && !validation.additionalCheck(value)) {
                showError(field, validation.additionalMessage);
                isValid = false;  // Mark the form as invalid if the additional check fails
            }
        });

        // If all fields are valid, allow the form submission
        if (isValid) {
            // Show an alert thanking the user and reset the form
            alert('Thank you for contacting us!');
            form.reset();  // Clear all the fields in the form
        }
    });

    // Function to show an error message for a specific input field
    function showError(input, message) {
        const formGroup = input.parentElement;  // Get the parent element of the input (usually the form group)
        const errorDisplay = formGroup.querySelector('.error-message');  // Find the error message element within the form group
        errorDisplay.textContent = message;  // Set the error message text
        errorDisplay.style.display = 'block';  // Display the error message
        input.classList.add('invalid');  // Add 'invalid' class to the input for styling (e.g., red border)
        input.setAttribute('aria-invalid', 'true');  // Add 'aria-invalid' attribute for accessibility
    }

    // Function to validate the email format
    // This is the traditional way to invoke a function to validate,
    // But it is also possible to do it by arrow functions as it is done up here.
    function isValidEmail(email) {
        // Simple regex pattern to check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);  // Return true if the email matches the pattern, false otherwise
    }
}