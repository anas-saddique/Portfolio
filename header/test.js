// Get the progress bar element
const progressBar = document.querySelector('.circular-progress');
const percentageText = document.querySelector('.percentage');

// Get the target percentage from the data attribute
const targetPercentage = progressBar.getAttribute('data-percentage');
let currentPercentage = 0;

// Update the progress bar every 15ms
const interval = setInterval(() => {
  if (currentPercentage >= targetPercentage) {
    clearInterval(interval);
  } else {
    currentPercentage++;
    // Update the CSS variable and the text content
    progressBar.style.setProperty('--progress-percentage', currentPercentage);
    percentageText.textContent = `${currentPercentage}%`;
  }
}, 15); // Adjust speed with this interval
