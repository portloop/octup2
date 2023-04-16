document.addEventListener('DOMContentLoaded', () => {
      // Cookie functions

  const acceptAgreement = document.querySelector('.accept-cookie'),
  declineAgreement = document.querySelector('.decline-cookie'),
  closeCookies = document.querySelector('.close-cookie-agreement'),
  cookiesBlock = document.querySelector('.coockie-agreement');

acceptAgreement.addEventListener('click', () => {
  sessionStorage.setItem('acceptCookie', 1);
  cookiesBlock.classList.add('hideCookie');
  setTimeout(() => {
    cookiesBlock.style.cssText = 'display: none;'
  }, 800);
});


declineAgreement.addEventListener('click', () => {
  sessionStorage.setItem('declineCookie', 1);
  cookiesBlock.classList.add('hideCookie');
  setTimeout(() => {
    cookiesBlock.style.cssText = 'display: none;'
  }, 800);
});

closeCookies.addEventListener('click', () => {
  sessionStorage.setItem('closeCookie', 1);
  cookiesBlock.classList.add('hideCookie');
  setTimeout(() => {
    cookiesBlock.style.cssText = 'display: none;'
  }, 800);
});

console.log(!sessionStorage.getItem('closeCookie') || !sessionStorage.getItem('acceptCookie') || !sessionStorage.getItem('declineCookie'))

function checkViewCookies () {
  if(!sessionStorage.getItem('closeCookie') && !sessionStorage.getItem('acceptCookie') && !sessionStorage.getItem('declineCookie')) {
    cookiesBlock.style.cssText = 'display: block;'
  }
}

checkViewCookies()

})