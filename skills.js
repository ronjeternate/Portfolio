document.querySelectorAll('.bar').forEach(bar => {
    const percentage = bar.getAttribute('data-percent'); // Get percentage from data attribute
    const percentageElem = document.createElement('span'); // Create a span to hold the percentage text
    percentageElem.classList.add('percentage'); // Add a class for styling
    percentageElem.textContent = percentage; // Set the text content to the percentage value
    bar.appendChild(percentageElem); // Append the span inside the bar

    // Show the percentage when hovering
    bar.addEventListener('mouseenter', () => {
        percentageElem.style.opacity = '1'; // Make it visible
    });

    // Hide the percentage when mouse leaves
    bar.addEventListener('mouseleave', () => {
        percentageElem.style.opacity = '0'; // Make it invisible again
    });
});
