
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('fadeBlock');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  // Burger Menu
  const burger = document.querySelector('.header-mobile-menu'),
    burgerMenuContainer = document.querySelector('.mobile-header-menu-container'),
    burgerClose = document.querySelector('.mobile-menu-close'),
    body = document.querySelector('body');

  burger.addEventListener('click', () => {
    burgerMenuContainer.classList.add('mobile-active');
    body.style.overflow = 'hidden';
  });

  burgerMenuContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-header-menu-container') || e.target.classList.contains('mobile-menu-close')) {
      burgerMenuContainer.classList.remove('mobile-active');
      body.style.overflow = 'auto';
    };
  });

  

  