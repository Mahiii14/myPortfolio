/// Apply accordion functionality to all accordions
document.querySelectorAll('.accordion').forEach(accordion => {
    // For each accordion, add event listeners to the questions
    accordion.querySelectorAll('.accordion-question').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Toggle the display of the answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  });
  
  // Image caption toggle functionality
  function toggleText(item) {
    const caption = item.querySelector('.caption');
    caption.style.display = (caption.style.display === 'none' || caption.style.display === '') ? 'block' : 'none';
  }
  
  // Add click event listeners to each image-item
  document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('click', () => toggleText(item));
  });
  
 
  