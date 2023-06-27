const carouselContainer = document.querySelector('.carousel-container');
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = document.querySelectorAll('.caousel-item');

  let position = 0;
  const slideWidth = carouselItems[0].offsetWidth;

  // Создаем копии слайдов для бесконечного повторения
  for (let i = 0; i < carouselItems.length * 3; i++) {
    carouselTrack.appendChild(carouselItems[i % carouselItems.length].cloneNode(true));
  }

  // Задаем ширину карусели
  carouselTrack.style.width = `${carouselItems.length * slideWidth}px`;

  // Запускаем карусель
  function moveCarousel() {
    position -= slideWidth;
    carouselTrack.style.transform = `translateX(${position}px)`;
    carouselTrack.style.transition = 'transform 1s';

    if (Math.abs(position) >= carouselTrack.offsetWidth / 2) {
      position = -10;
      setTimeout(() => {
        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = `translateX(${position}px)`;
      }, 1000);
    }
  }

  setInterval(moveCarousel, 1000);