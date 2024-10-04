//change the limit to however many images to use
//keep your api_key secure!
const url = "https://api.thecatapi.com/v1/images/search?limit=14";
const api_key = "live_YcR47n5JJYmlr6BxQ28vbpSo1YA76GuV3A25lSHK5Ky52sxXp4K0P7ZtTTQAoEJH"

function init() {
  fetch(url, {
    headers: {
      'x-api-key': api_key
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let imagesData = data;
      imagesData.map(function (imageData) {

        let image = document.createElement('img');
        //use the url from the image object
        image.src = `${imageData.url}`;

        let gridCell = document.createElement('div');
        gridCell.appendChild(image)

        document.getElementById('grid').appendChild(gridCell);

      });
    })
    .catch(function (error) {
      console.log(error);
    });

}

//init();

function learnMore() {
  alert("Stay tuned! More exciting content is on the way.");
}
// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Burger Animation
  burger.classList.toggle('toggle');
});

function openModal(event) {
  let name = event.offsetParent.children[1].firstChild;
  let description = event.offsetParent.children[6].firstChild;
  let modal = document.getElementById('modalBody');
  let nameLabel = document.createElement('h2');
  let descriptionLabel = document.createElement('p');
  nameLabel.textContent = name.data;
  descriptionLabel.textContent = description.data;
  modal.appendChild(nameLabel);
  modal.appendChild(descriptionLabel);
  document.getElementById('adoptMeModal').style.display = 'block';
}

function closeModal(event) {
  document.getElementById('adoptMeModal').style.display = 'none';
  let modalBody = document.getElementById('modalBody');
  modalBody.textContent = "";
  
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let modal of modals) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const plusMinus = question.querySelector('.plus-minus');

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            plusMinus.textContent = '+';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            plusMinus.textContent = '−';
        }
    });
});

// Form Validation
const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const subjectField = document.getElementById('subject');
const messageField = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.textContent = '';
        message.style.display = 'none';
    });

    // Reset input borders
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
        input.classList.remove('invalid');
    });

    // Validate fields
    let isValid = true;

    // Name Validation
    if (nameField.value.trim() === '') {
        showError(nameField, 'Please enter your name.');
        isValid = false;
    }

    // Email Validation
    if (emailField.value.trim() === '') {
        showError(emailField, 'Please enter your email.');
        isValid = false;
    } else if (!isValidEmail(emailField.value.trim())) {
        showError(emailField, 'Please enter a valid email address.');
        isValid = false;
    }

    // Subject Validation
    if (subjectField.value.trim() === '') {
        showError(subjectField, 'Please enter a subject.');
        isValid = false;
    }

    // Message Validation
    if (messageField.value.trim() === '') {
        showError(messageField, 'Please enter your message.');
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        // You can proceed with form submission here
        // For now, we'll just display an alert
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
}

// Email validation function
function isValidEmail(email) {
    // Simple email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}