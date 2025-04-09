document.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scrollProgress = scrollY / maxScroll;

    const scaleFactor = 1 + scrollProgress * 150; 
    const minScale = 1;
    const maxScale = 600;
    const scale = Math.min(Math.max(scaleFactor, minScale), maxScale);

    const moveX = 0; // не двигаем по оси X
    const moveY = scrollProgress * 0; // сдвиг строго вниз

    logoContainer.style.transform = `translate(-50%, calc(-50% + ${moveY}px)) scale(${scale})`;
});
