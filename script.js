document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const gateLeft = document.querySelector('.gate-panel.left');
  const gateRight = document.querySelector('.gate-panel.right');
  const gate = document.getElementById('gate');
  const mainContent = document.getElementById('mainContent');
  const bgMusic = document.getElementById('bgMusic');

  // Handle invitation open
  openBtn.addEventListener('click', () => {
    gateLeft.classList.add('open');
    gateRight.classList.add('open');
    bgMusic.play();

    setTimeout(() => {
      gate.style.display = 'none';
      mainContent.classList.remove('opacity-0');
    }, 1600);
  });

  // Countdown Timer
  const targetDate = new Date('2025-12-01T18:00:00');
  const countdownEl = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.days.textContent = days;
    countdownEl.hours.textContent = hours;
    countdownEl.minutes.textContent = minutes;
    countdownEl.seconds.textContent = seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Photo Slider
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let index = 0;

  function updateSlider() {
    const width = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${index * width}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slider.children.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slider.children.length) % slider.children.length;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
});
