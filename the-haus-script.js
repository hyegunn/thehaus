document.addEventListener('DOMContentLoaded', () => {
  // Get the overlay and popup
  const overlay = document.querySelector('.overlay');
  const popup2 = document.querySelector('.popup2');

  // Get the buttons
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');

  // Show the popup //
  overlay.classList.remove('hide');

  // Handle the yes button click
  yesBtn.addEventListener('click', () => {
    // Hide the overlay and popup
    overlay.classList.add('hide');
    document.querySelector('.background').classList.add('hide');
  });

  // Handle the no button click
  noBtn.addEventListener('click', () => {
    // Redirect to Google
    window.location.href = 'https://www.google.com';
  });
});
