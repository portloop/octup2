'use strict';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getFirestore, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { articlePreview } from './components/articlePreview.js';
import { getStorage, ref } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js';
import { getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCAlkOx2tWZ8jAtzkdGL5iEZBGfH8wbDo4',
  authDomain: 'octup-test.firebaseapp.com',
  projectId: 'octup-test',
  storageBucket: 'octup-test.appspot.com',
  messagingSenderId: '798222224073',
  appId: '1:798222224073:web:0b8b8d30917f3755371b18'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage();

let params = new URLSearchParams(document.location.search);
let id = params.get('id');

try {
  const querySnapshot = await getDocs(query(collection(db, 'article1'), where('cid', '==', id)));
  querySnapshot.forEach((doc) => {
    const myArticle = {
      id: doc.id,
      ...doc.data()
    };
    console.log(typeof(myArticle.faTag))
    const newElement = document.createElement('div');
    newElement.innerHTML = myArticle.faTag;

    document.querySelector('.main-article-conainer').innerHTML = myArticle.faTag;

  });
} catch (error) {
  console.error(error);
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
 if (e.target.classList.contains('mobile-header-menu-container') || e.target.classList.contains('mobile-menu-close') || e.target.tagName == 'A' || e.target.classList.contains('lead-btn')) {
   burgerMenuContainer.classList.remove('mobile-active');
   body.style.overflow = 'auto';
 };
});
