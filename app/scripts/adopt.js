// Function to open the modal when a button is clicked
// It gets the closest .cat-card element, extracts the cat's name (h3 element)
// and description (.cat-description), and dynamically inserts these details into the modal body.
// The modal is then displayed by setting its style.display to 'block'.
// For accessibility, ARIA attributes are added to define the modal as a dialog and focus is set to the modal for improved keyboard navigation.
function openModal(button) {
    // Find the closest parent element with the class 'cat-card' (which contains the button)
    const card = button.closest('.cat-card');
    
    // Extract the cat's name from the h3 element inside the 'cat-card'
    const name = card.querySelector('h3').textContent;
    
    // Extract the cat's description from the element with class 'cat-description'
    const description = card.querySelector('.cat-description').textContent;

    // Get the modal body element where the cat's details will be inserted
    const modalBody = document.getElementById('modalBody');
    
    // Clear any previous content in the modal body to avoid showing old details
    modalBody.innerHTML = ''; // Clear previous content

    // Create an h2 element to display the cat's name in the modal
    const nameLabel = document.createElement('h2');
    nameLabel.textContent = name; // Set the cat's name as the content of the h2 element
    
    // Create a p element to display the cat's description in the modal
    const descriptionLabel = document.createElement('p');
    descriptionLabel.textContent = description; // Set the description as the content of the p element

    // Append the name and description elements to the modal body
    modalBody.appendChild(nameLabel);
    modalBody.appendChild(descriptionLabel);

    // Get the modal element and make it visible
    const modal = document.getElementById('adoptMeModal');
    modal.style.display = 'block'; // Show the modal by changing the display style to 'block'

    // Accessibility: Set focus to the modal and assign appropriate ARIA attributes
    modal.setAttribute('aria-modal', 'true'); // Indicate that the modal is active for screen readers
    modal.setAttribute('role', 'dialog'); // Define the role of the modal for accessibility purposes
    modal.focus(); // Set focus on the modal to improve keyboard navigation
}

// Function to close the modal
// This function hides the modal by setting its style.display to 'none'.
// It removes the ARIA attributes that were added when the modal was opened.
// Focus is removed from the modal for accessibility purposes, so that keyboard users are not stuck in the modal.
function closeModal() {
    // Get the modal element
    const modal = document.getElementById('adoptMeModal');
    
    // Hide the modal by setting the display style to 'none'
    modal.style.display = 'none'; // Close the modal
    
    // Remove the ARIA attributes that were added when the modal was opened
    modal.removeAttribute('aria-modal'); // Remove the 'aria-modal' attribute
    modal.removeAttribute('role'); // Remove the 'role' attribute

    // Accessibility: Return focus to the triggering element (blur the modal)
    document.activeElement.blur(); // Remove focus from the modal
}

// An event listener is added to detect clicks outside the modal content. If the user clicks outside the modal, the modal is closed.
// This ensures that users can close the modal by clicking on the overlay (the area outside the modal content).
document.addEventListener('click', function(event) {
    // Get the modal element
    const modal = document.getElementById('adoptMeModal');
    
    // Check if the click event occurred outside of the modal content (on the modal overlay)
    if (event.target === modal) {
        closeModal(); // Close the modal if the user clicked outside of it
    }
});
