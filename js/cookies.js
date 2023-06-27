document.addEventListener('DOMContentLoaded', () => {
      // Cookie functions

  const acceptAgreement = document.querySelector('.accept-cookie'),
  declineAgreement = document.querySelector('.decline-cookie'),
  closeCookies = document.querySelector('.close-cookie-agreement'),
  cookiesBlock = document.querySelector('.coockie-agreement');

acceptAgreement.addEventListener('click', () => {
  localStorage.setItem('acceptCookie', 1);
  cookiesBlock.classList.add('hideCookie');
  setTimeout(() => {
    cookiesBlock.style.cssText = 'display: none;'
  }, 800);
});

declineAgreement.addEventListener('click', () => {
  localStorage.setItem('declineCookie', 1);
  cookiesBlock.classList.add('hideCookie');
  setTimeout(() => {
    cookiesBlock.style.cssText = 'display: none;'
  }, 800);
});

closeCookies.addEventListener('click', () => {
  localStorage.setItem('closeCookie', 1);
  cookiesBlock.classList.add('hideCookie');
  setTimeout(() => {
    cookiesBlock.style.cssText = 'display: none;'
  }, 800);
});

function checkViewCookies () {
  if(!localStorage.getItem('closeCookie') && !localStorage.getItem('acceptCookie') && !localStorage.getItem('declineCookie')) {
    cookiesBlock.style.cssText = 'display: block;'
  }
}

checkViewCookies()

})