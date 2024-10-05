
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