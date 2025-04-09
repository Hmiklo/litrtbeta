document.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    const text = document.querySelector('.text');
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
  
    const scrollProgress = scrollY / maxScroll; // 0 до 1
  
    // Масштаб логотипа
    const scaleFactor = 1 + scrollProgress * 300;
    logoContainer.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
  
    // Прозрачность текста
    const fadeInProgress = Math.min(scrollProgress / 0.01, 1); // 5% скролла = полная видимость
    text.style.opacity = fadeInProgress;
  });
  