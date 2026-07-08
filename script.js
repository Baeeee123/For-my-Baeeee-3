// 1. Music Play / Pause Control
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.add('rotating');
  } else {
    music.pause();
    musicBtn.classList.remove('rotating');
  }
});

// 2. Letter Popup Functions
function openLetter() {
  const popup = document.getElementById('letterPopup');
  popup.style.display = 'flex';
}

function closeLetter() {
  const popup = document.getElementById('letterPopup');
  popup.style.display = 'none';
}

// 3. Falling Hearts Background Effect
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  heart.innerText = '❤️';
  
  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";
  // Random size
  heart.style.fontSize = Math.random() * 15 + 12 + "px";
  // Random speed
  heart.style.animationDuration = Math.random() * 3 + 2.5 + "s";
  
  document.body.appendChild(heart);
  
  // Clean up hearts after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generates a heart every 300ms
setInterval(createHeart, 300);
