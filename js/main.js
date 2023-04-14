// 'use sctrict'
// import firstTab from './bodymovin.js';
// import secondTab from './bodymovin.js';
// import thirdTab from './bodymovin.js';
// import firstScreenAnimation from './bodymovin.js';

window.addEventListener('DOMContentLoaded', () => {


  // Smooth FadeIn block on scroll 
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


  // Smooth scroll to from on click lead button
  const buttons = document.querySelectorAll('.lead-btn'),
    leadForm = document.querySelector('footer');
    

  buttons.forEach((item => {
    item.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('send-data')) {
        e.preventDefault();
      } else {
        leadForm.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
        });
      }
    })
  }))



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
    if (e.target.classList.contains('mobile-header-menu-container') || e.target.classList.contains('mobile-menu-close') || e.target.tagName == 'A' || e.target.classList.contains('lead-btn')) {
      burgerMenuContainer.classList.remove('mobile-active');
      body.style.overflow = 'auto';
    };
  });



 



});







