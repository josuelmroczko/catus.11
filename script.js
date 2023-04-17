const carousel = document.querySelector('.carousel');
    const buttonLeft = document.querySelector('.carousel-button-left');
    const buttonRight = document.querySelector('.carousel-button-right');

    buttonLeft.addEventListener('click', () => {
      carousel.scrollBy(-200, 0);
    });

    buttonRight.addEventListener('click', () => {
      carousel.scrollBy(200, 0);
    });