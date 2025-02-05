window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    const text = document.querySelector('.coming-soon');
    const body = document.body;
    let scale = 1; 
    let scrollY = 0; 
  
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) { 
            scale += 0.1;
        } else { 
            scale -= 0.1;
        }
  
        if (scale < 1) scale = 1;
  
        if (scale > 5) {
            logo.style.opacity = '0';
            text.style.opacity = '1'; // Показываем текст
        } else {
            logo.style.opacity = '1';
            text.style.opacity = '0'; // Скрываем текст
        }
  
        logo.style.transform = `scale(${scale})`;
        scrollY += event.deltaY * 0.5; 
        body.style.backgroundPosition = `0px ${scrollY}px`;
    });
  });
  