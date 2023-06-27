let firstTab = document.querySelector('.first-tab'),
secondTab = document.querySelector('.second-tab'),
thirdTab = document.querySelector('.third-tab');

// Switch Tabs Function
let tabs = document.querySelectorAll('.rate-tab'),
  tabsContent = document.querySelectorAll('.rate-card'),
  tabsParent = document.querySelector('.rate-section-tabs');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.add('hideTab');
    item.classList.remove('showTab', 'fadeTab');
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
    item.classList.remove('showTabR', 'fadeReviewTab');
  })

  rTabs.forEach(item => {
    item.classList.remove('active-switcher');
  })
}

function rShowTabContent(i) {
  rTabsContent[i].classList.add('showTabR', 'fadeReviewTab');
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
  // removeReviewContent();
});

arrowRight.addEventListener('click', () => {
  stopInterval();
  currentTab = (currentTab + 1) % rTabs.length; // переключение на следующий таб
  rHideTabContent();
  rShowTabContent(currentTab);
  startInterval();
  // removeReviewContent();
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


function handleSwipe(event) {
  const direction = event.direction;
  if (direction === Hammer.DIRECTION_LEFT) {
    // Свайп влево - переключиться на следующий таб
    stopInterval();
    currentTab = (currentTab + 1) % rTabs.length;
    rHideTabContent();
    rShowTabContent(currentTab);
    startInterval();
  } else if (direction === Hammer.DIRECTION_RIGHT) {
    // Свайп вправо - переключиться на предыдущий таб
    stopInterval();
    currentTab = (currentTab - 1 + rTabs.length) % rTabs.length;
    rHideTabContent();
    rShowTabContent(currentTab);
    startInterval();
  }
}

const swipeHandler = new Hammer(rTabsParent);
swipeHandler.on('swipe', handleSwipe);


function addHammerSwipe(tabContent) {
  const swipeHandler = new Hammer(tabContent);
  swipeHandler.on('swipe', handleSwipe);
}

rTabsContent.forEach(tabContent => addHammerSwipe(tabContent));