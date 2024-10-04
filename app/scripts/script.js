//change the limit to however many images to use
//keep your api_key secure!

(async function fetchCatImages() {
  const url = "https://api.thecatapi.com/v1/images/search?limit=14";
  const api_key = "live_YcR47n5JJYmlr6BxQ28vbpSo1YA76GuV3A25lSHK5Ky52sxXp4K0P7ZtTTQAoEJH";

  try {
      const response = await fetch(url, {
          headers: { 'x-api-key': api_key }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const imagesData = await response.json();

      imagesData.forEach(imageData => {
          const image = document.createElement('img');
          image.src = imageData.url;
          image.alt = 'Cute cat picture';

          const gridCell = document.createElement('div');
          gridCell.appendChild(image);

          document.getElementById('grid').appendChild(gridCell);
      });
  } catch (error) {
      console.error('Error fetching cat images:', error);
      const grid = document.getElementById('grid');
      grid.textContent = 'Failed to load cat images. Please try again later.';
  }
})();

function learnMore() {
// Alerts can be intrusive and are generally discouraged in modern web development.
// For user Experience is better redirecting to a section of the page or displaying content dynamically.
  window.location.href = '#about-us';
}
// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          link.style.animation = link.style.animation
              ? ''
              : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      });

      // Burger Animation
      burger.classList.toggle('toggle');
  });
});

function openModal(button) {
  const card = button.closest('.cat-card');
  const name = card.querySelector('h3').textContent;
  const description = card.querySelector('.cat-description').textContent;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = ''; // Clear previous content

  const nameLabel = document.createElement('h2');
  nameLabel.textContent = name;
  const descriptionLabel = document.createElement('p');
  descriptionLabel.textContent = description;

  modalBody.appendChild(nameLabel);
  modalBody.appendChild(descriptionLabel);

  const modal = document.getElementById('adoptMeModal');
  modal.style.display = 'block';

  // Accessibility: Set focus to the modal
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('role', 'dialog');
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById('adoptMeModal');
  modal.style.display = 'none';
  modal.removeAttribute('aria-modal');
  modal.removeAttribute('role');

  // Accessibility: Return focus to the triggering element
  document.activeElement.blur();
}
// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
  const modal = document.getElementById('adoptMeModal');
  if (event.target === modal) {
      closeModal();
  }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

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