// Background Decorations
    function createBackgroundDecorations() {
      const container = document.getElementById('bg-decorations');
      if (!container) return;

      // Floating stars
      for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'floating-star';
        star.textContent = ['✨', '❤️', '🫶🏻', '💋'][Math.floor(Math.random() * 4)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        container.appendChild(star);
      }

      // Bubbles
      for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = 20 + Math.random() * 40;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = Math.random() * 100 + '%';
        bubble.style.background = `radial-gradient(circle at 30% 30%,
          hsla(${270 + Math.random() * 60}, 40%, 70%, 0.2),
          hsla(${270 + Math.random() * 60}, 30%, 50%, 0.1))`;
        bubble.style.animationDelay = Math.random() * 5 + 's';
        bubble.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(bubble);
      }
    }
    createBackgroundDecorations();

    // Snowfall - Behind everything
    function createSnowflakes() {
      const container = document.getElementById('snowfall');
      for (let i = 0; i < 40; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = ['❄', '❅', '❆', '✦'][Math.floor(Math.random() * 4)];
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = (8 + Math.random() * 12) + 's';
        flake.style.animationDelay = Math.random() * 10 + 's';
        flake.style.fontSize = (0.4 + Math.random() * 0.8) + 'rem';
        container.appendChild(flake);
      }
    }
    createSnowflakes();

    // Confetti with soft colors
    function showConfetti() {
      const container = document.getElementById('confetti-container');
      container.innerHTML = '';
      const colors = ['#b794c6', '#c4a7d0', '#e8d5b7', '#d4a5a5', '#c9b1d6', '#f0e6d3'];

      for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = (8 + Math.random() * 10) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(confetti);
      }

      setTimeout(() => container.innerHTML = '', 5000);
    }

    // Christmas Countdown
    function updateCountdown() {
      const now = new Date();
      let christmas = new Date(now.getFullYear(), 11, 25);
      if (now > christmas) christmas = new Date(now.getFullYear() + 1, 11, 25);

      const diff = christmas - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Password
    const passwordInput = document.getElementById('password-input');
    const unlockBtn = document.getElementById('unlock-btn');
    const errorMsg = document.getElementById('error-msg');

    function checkPassword() {
      if (passwordInput.value.trim() === '3362') {
        navigateTo('letter-page');
        showConfetti();
      } else {
        errorMsg.classList.remove('hidden');
        setTimeout(() => errorMsg.classList.add('hidden'), 2000);
      }
    }

    unlockBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkPassword();
    });

    // Page Navigation
    function navigateTo(pageId) {
      const currentPage = document.querySelector('.page.active');
      currentPage.classList.add('fade-out');

      setTimeout(() => {
        currentPage.classList.remove('active', 'fade-out');
        const newPage = document.getElementById(pageId);
        newPage.classList.add('active');

        if (pageId === 'ending-page') {
          showEndingAnimations();
          showConfetti();
        }
      }, 500);
    }

    // Christmas Tree Click
    document.getElementById('christmas-tree').addEventListener('click', () => {
      document.getElementById('tree-section').classList.add('hidden');
      document.getElementById('letter-section').classList.remove('hidden');
      showConfetti();
    });

    // Heart Counter
    let heartCount = 0;
    const heartBtn = document.getElementById('heart-btn');
    const heartCountEl = document.getElementById('heart-count');

    heartBtn.addEventListener('click', () => {
      heartCount++;
      heartCountEl.textContent = heartCount;

      const floating = document.createElement('span');
      floating.className = 'floating-heart';
      floating.textContent = ['💜', '💖', '💕', '✨'][Math.floor(Math.random() * 4)];
      heartBtn.appendChild(floating);
      setTimeout(() => floating.remove(), 1000);
    });

    // Image Carousel
    const images = [
     'https://i.ibb.co/N6w009J7/image.png',
      'https://i.ibb.co/23FqQQzC/image.png',
      'https://i.ibb.co/N2dqcR2F/image.png'
    ];
    let currentSlide = 0;

    const carouselImg = document.getElementById('carousel-img');
    const dotsContainer = document.getElementById('carousel-dots');

    images.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
      currentSlide = index;
      carouselImg.src = images[currentSlide];
      document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % images.length;
      goToSlide(currentSlide);
    }, 3000);

    // Love Timer
    function updateLoveTimer() {
      const startDate = new Date('2025-07-20T00:00:00');
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById('love-timer').textContent =
        `💜 We've been together for ${days} days, ${hours} hrs, ${minutes} mins, and ${seconds} secs 💜`;
    }
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000);

    // Love Messages
    const loveMessages = [
      "💜 أنتِ أجمل شيء حصل في حياتي 💜",
      "✨ معاكي الدنيا أحلى ✨",
      "💜 بحبك أكتر من أي كلام 💜",
      "🌙 أنتِ راحتي وأماني 🌙",
      "💜 قلبي ملكك للأبد 💜",
      "⭐ أنتِ نور حياتي ⭐",
      "💜 معاكي كل حاجة تمام 💜",
      "✨ أنتِ أحلى قرار اتخذته ✨"
    ];
    let currentMessage = 0;

    setInterval(() => {
      const el = document.getElementById('love-message');
      el.style.opacity = '0';
      setTimeout(() => {
        currentMessage = (currentMessage + 1) % loveMessages.length;
        el.textContent = loveMessages[currentMessage];
        el.style.opacity = '1';
      }, 300);
    }, 4000);

    // Ending Page Animations
    function showEndingAnimations() {
      const elements = [
        { id: 'ending-title', delay: 500 },
        { id: 'ending-text-1', delay: 1500 },
        { id: 'ending-text-2', delay: 2500 },
        { id: 'ending-text-3', delay: 3500 },
        { id: 'christmas-msg', delay: 4500 },
        { id: 'replay-btn', delay: 5000 },
        { id: 'designer-text', delay: 5500 }
      ];

      elements.forEach(({ id, delay }) => {
        setTimeout(() => {
          document.getElementById(id).style.opacity = '1';
          document.getElementById(id).style.transition = 'opacity 1s ease, transform 1s ease';
        }, delay);
      });
    }

    // Replay
    function replay() {
      showConfetti();

      // Reset ending page
      ['ending-title', 'ending-text-1', 'ending-text-2', 'ending-text-3', 'christmas-msg', 'replay-btn', 'designer-text'].forEach(id => {
        document.getElementById(id).style.opacity = '0';
      });

      // Reset letter page
      document.getElementById('tree-section').classList.remove('hidden');
      document.getElementById('letter-section').classList.add('hidden');

      // Reset password
      passwordInput.value = '';

      navigateTo('password-page');

    }
                                                 