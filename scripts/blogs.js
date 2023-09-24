function toggleSubtopics(topic) {
    const subtopics = topic.querySelector('.subtopics');
    const arrow = topic.querySelector('.arrow');
  
    // Check if subtopics are currently visible (open)
    const isOpen = subtopics.style.display === 'block';
  
    // Toggle the display of subtopics based on their current state
    subtopics.style.display = isOpen ? 'none' : 'block';
  
    // Update the arrow icon based on the new state
    arrow.innerHTML = isOpen ? '▼' : '▲';
  }
  
  // Set subtopics to be initially closed when the page loads
  const allTopics = document.querySelectorAll('.topic');
  allTopics.forEach(topic => {
    const subtopics = topic.querySelector('.subtopics');
    const arrow = topic.querySelector('.arrow');
  
    subtopics.style.display = 'none';
    arrow.innerHTML = '▼'; // Set the arrow to point down (indicating closed)
  
    // Add an event listener to the arrow to change the cursor
    arrow.addEventListener('click', () => {
      arrow.style.cursor = 'pointer';
    });
  });

