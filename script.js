// script.js
function revealGift() {
  const giftSection = document.querySelector('.gift');
  giftSection.classList.remove('hidden');
}

function saveWish() {
  const wishBox = document.getElementById('wish-box').value;
  if (!wishBox.trim()) {
    alert("Please write your wish first!");
    return;
  }
  document.getElementById('wish-text').innerText = wishBox;
  document.querySelector('.wish-display').classList.remove('hidden');
}

// Countdown Timer
const countdownTimer = document.getElementById('countdown-timer');
const newYear = new Date('Jan 1, 2025 00:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = newYear - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

