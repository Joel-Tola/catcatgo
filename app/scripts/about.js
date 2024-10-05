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