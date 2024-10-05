// FAQ Accordion
// Select all elements with the class 'faq-question'
// These represent the clickable questions in the FAQ section
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each 'faq-question' element
faqQuestions.forEach(question => {
    // Add a click event listener to each question
    // he addEventListener('click') is used to make the FAQ section interactive 
    //by allowing users to click on a question to reveal or hide the answer, 
    //while also updating the visual cue (plus/minus sign) dynamically.
    question.addEventListener('click', () => {
        // Select the next sibling element after the clicked question
        // This is the answer section that needs to be shown/hidden
        const answer = question.nextElementSibling;
        // Select the element inside the question that shows the plus/minus sign
        const plusMinus = question.querySelector('.plus-minus');
        // Check if the answer is already open (if maxHeight is set)
        if (answer.style.maxHeight) {
            // If it's open, collapse it by setting maxHeight to null
            answer.style.maxHeight = null;
            // Change the symbol back to '+' to indicate the answer is hidden
            plusMinus.textContent = '+';
        } else {
            // If it's closed, expand the answer by setting maxHeight to the scrollHeight
            // scrollHeight is the full height of the answer content
            answer.style.maxHeight = answer.scrollHeight + 'px';
            // Change the symbol to '−' to indicate the answer is shown
            plusMinus.textContent = '-';
        }
    });
});