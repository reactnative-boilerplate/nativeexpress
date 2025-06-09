// FAQ accordion functionality: toggle answer visibility on question click
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const icon = question.querySelector('.toggle-icon');
      const answer = question.nextElementSibling;
      if (answer.style.display === 'block') {
        // Hide answer
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        // Show answer
        answer.style.display = 'block';
        icon.textContent = '–';  // change plus to minus
      }
    });
  });
  