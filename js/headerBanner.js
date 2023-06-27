document.addEventListener('click', () => {
    let headerBannerClose = document.querySelector('.hb-close'),
    headerBanner = document.querySelector('.header-banner'),
    header = document.querySelector('header');
headerBannerClose.addEventListener('click', (event) => {
  headerBanner.style.cssText = 'display: none';
  header.style.cssText = 'padding-top: 15px;'
})
})