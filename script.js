function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
  }
  
  updateUTCTime(); // Call the function once initially
  setInterval(updateUTCTime, 1000); // Update every second
  