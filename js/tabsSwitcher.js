

var firstTab = bodymovin.loadAnimation({
  container: document.querySelector('.first-tab'), // Required
  path: './css/lottie-animation/tab1-visibility.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})


var secondTab = bodymovin.loadAnimation({
  container: document.querySelector('.second-tab'), // Required
  path: './css/lottie-animation/tab2-automation.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})

var thirdTab = bodymovin.loadAnimation({
  container: document.querySelector('.third-tab'), // Required
  path: './css/lottie-animation/tab3-ins_obj.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})

var firstScreenAnimation = bodymovin.loadAnimation({
  container: document.querySelector('.focus-animation'), // Required
  path: './css/lottie-animation/animation.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})


// First Screen Animation


firstScreenAnimation.play();
firstScreenAnimation.addEventListener('complete', () => {
  firstScreenAnimation.goToAndPlay(14, true);
})


// Lottie animation on tabs 



// Switch Tabs Function
let tabs = document.querySelectorAll('.rate-tab'),
  tabsContent = document.querySelectorAll('.rate-card'),
  tabsParent = document.querySelector('.rate-section-tabs');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.add('hideTab');
    item.classList.remove('showTab', 'fadeTab');
    firstTab.play();
    firstTab.goToAndPlay(0, true);
    secondTab.play();
    secondTab.goToAndPlay(0, true);
    thirdTab.play();
    thirdTab.goToAndPlay(0, true);
  })

  tabs.forEach(item => {
    item.classList.remove('active-tab');
  })
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('showTab', 'fadeTab');
  tabsContent[i].classList.remove('hideTab');
  tabs[i].classList.add('active-tab');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('rate-tab')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    })
  }
});

// BBS Tabs switch
let bbtabs = document.querySelectorAll('.bb-tab-item'),
  bbtabsContent = document.querySelectorAll('.bb-tab'),
  bbtabsParent = document.querySelector('.bb-tab-menu');

function bbhideTabContent() {
  bbtabsContent.forEach(item => {
    item.classList.add('hideTab');
    item.classList.remove('showTab', 'fadeTab');
  })

  bbtabs.forEach(item => {
    item.classList.remove('bb-active');
  })
}

function bbshowTabContent(i = 0) {
  bbtabsContent[i].classList.add('showTab', 'fadeTab');
  bbtabsContent[i].classList.remove('hideTab');
  bbtabs[i].classList.add('bb-active');
}

bbhideTabContent();
bbshowTabContent();



bbtabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('bb-tab-item')) {
    bbtabs.forEach((item, i) => {
      if (target == item) {
        bbhideTabContent();
        bbshowTabContent(i);
      }
    })
  }
});


// Review Tabs switch
let rTabs = document.querySelectorAll('.switcher-item'),
  rTabsContent = document.querySelectorAll('.review-box'),
  rTabsParent = document.querySelector('.review-switcher');

let currentTab = 0; // текущий таб
let intervalId = null; // идентификатор интервала

function rHideTabContent() {
  rTabsContent.forEach(item => {
    item.classList.add('hideTab');
    item.classList.remove('showTab', 'fadeReviewTab');
  })

  rTabs.forEach(item => {
    item.classList.remove('active-switcher');
  })
}

function rShowTabContent(i) {
  rTabsContent[i].classList.add('showTab', 'fadeReviewTab');
  rTabsContent[i].classList.remove('hideTab');
  rTabs[i].classList.add('active-switcher');
}

function startInterval() {
  intervalId = setInterval(() => {
    currentTab = (currentTab + 1) % rTabs.length; // переключение на следующий таб
    rHideTabContent();
    rShowTabContent(currentTab);
  }, 10000);
}

function stopInterval() {
  clearInterval(intervalId);
}

rHideTabContent();
rShowTabContent(currentTab);
startInterval(); // запуск интервала

rTabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('switcher-item')) {
    rTabs.forEach((item, i) => {
      if (target == item) {
        stopInterval(); // остановка интервала при переключении на другой таб
        currentTab = i;
        rHideTabContent();
        rShowTabContent(currentTab);
        startInterval(); // запуск интервала снова
      }
    })
  }
});

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  stopInterval();
  currentTab = (currentTab - 1 + rTabs.length) % rTabs.length; // переключение на предыдущий таб
  rHideTabContent();
  rShowTabContent(currentTab);
  startInterval();
});

arrowRight.addEventListener('click', () => {
  stopInterval();
  currentTab = (currentTab + 1) % rTabs.length; // переключение на следующий таб
  rHideTabContent();
  rShowTabContent(currentTab);
  startInterval();
});

let touchStartX = null;
let touchEndX = null;

// Обработчик события touchstart
rTabsParent.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  touchStartX = touch.clientX;
});

// Обработчик события touchmove
rTabsParent.addEventListener('touchmove', (event) => {
  if (touchStartX === null) {
    return;
  }

  const touch = event.touches[0];
  touchEndX = touch.clientX;
});

// Обработчик события touchend
rTabsParent.addEventListener('touchend', () => {
  console.log(touchStartX, touchEndX)
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 0) {
    // Свайп влево - переключаем на следующий таб
    stopInterval();
    currentTab = (currentTab + 1) % rTabs.length;
    rHideTabContent();
    rShowTabContent(currentTab);
    startInterval();
  } else if (touchDiff < 0) {
    // Свайп вправо - переключаем на предыдущий таб
    stopInterval();
    currentTab = (currentTab - 1 + rTabs.length) % rTabs.length;
    rHideTabContent();
    rShowTabContent(currentTab);
    startInterval();
  }

  touchStartX = null;
  touchEndX = null;
});