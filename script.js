document.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scrollProgress = scrollY / maxScroll;

    const scaleFactor = 1 + scrollProgress * 150; 
    const minScale = 1;
    const maxScale = 600;
    const scale = Math.min(Math.max(scaleFactor, minScale), maxScale);

    const moveX = scrollProgress * 0;
    const moveY = scrollProgress * 379;

    logoContainer.style.transform = `translate(calc(-50% + ${moveX}%), calc(-50% + ${moveY}%)) scale(${scale})`;
});

