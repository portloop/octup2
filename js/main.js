window.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to from on click lead button
  const buttons = document.querySelectorAll('.lead-btn'),
    leadForm = document.querySelector('footer');
  let scrollToForm = document.querySelector('#validationOnSubmit')


  buttons.forEach((item => {
    item.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('send-data')) {
        e.preventDefault();
      } else {
        scrollToForm.scrollIntoView({ block: "end", behavior: "smooth" });

      }
    })
  }))

  // Burger Menu
  const burger = document.querySelector('.header-mobile-menu'),
    burgerMenuContainer = document.querySelector('.mobile-header-menu-container'),
    burgerClose = document.querySelector('.mobile-menu-close'),
    body = document.querySelector('body');


    let listButton = document.querySelector('.m-dropdown-title');
    let list = document.querySelector('.m-dropdown-list')

    listButton.addEventListener('click', (e) => {
        list.classList.toggle('active-list')
    })

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

  // var lazyImages = Array.from(document.querySelectorAll('img.lazy-image'));

  // function lazyLoad() {
  //   lazyImages.forEach(function (image) {
  //     if (isElementInViewport(image) && !image.classList.contains('loaded')) {
  //       image.src = image.dataset.src;
  //       image.classList.add('loaded');
  //     }
  //   });
  // }

  // function isElementInViewport(element) {
  //   var rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // // Загрузка изображений при прокрутке страницы
  // window.addEventListener('scroll', lazyLoad);
  // window.addEventListener('resize', lazyLoad);
  // lazyLoad(); // Загрузка изображений в начале

  

  

});

function submitDataLayer(event) {
  console.log('hui')
  let target = event.target,
      action = target.getAttribute('data-dlAction');

      console.log(target, action)

      768 < document.documentElement.clientWidth ? dataLayer.push({ event: "click", itemName: `${action}-desktop` }) : dataLayer.push({ event: "click", itemName: `${action}-mobile` });
}