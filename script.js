window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    const firstScreen = document.querySelector('.first-screen');
    const secondScreen = document.querySelector('.second-screen');
    const text = document.querySelector('.coming-soon');
    
    let scale = 1;
    let scrollY = 0;
  
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) { // Скролл вниз
            scale += 0.1;
        } else { // Скролл вверх
            scale -= 0.1;
        }
  
        if (scale < 1) scale = 1;
  
        // Логотип увеличивается и становится прозрачным
        logo.style.transform = `scale(${scale})`;
        logo.style.opacity = `${1 - (scale - 1) / 3}`; // Постепенно исчезает
  
        // Когда логотип становится огромным, показываем белую страницу
        if (scale > 3) {
            firstScreen.style.opacity = '0'; // Чёрный фон исчезает
            secondScreen.style.opacity = '1'; // Белый фон проявляется
            text.style.opacity = '1'; // Показываем текст
        } else {
            firstScreen.style.opacity = '1'; // Чёрный фон остаётся
            secondScreen.style.opacity = '0'; // Белый фон скрыт
            text.style.opacity = '0'; // Текст скрыт
        }
    });
  });
  
