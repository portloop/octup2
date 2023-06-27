'use strict'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { articlePreview } from './components/articlePreview.js';
import { getStorage, ref } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js';
import { getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js';

  const firebaseConfig = {
    apiKey: "AIzaSyCAlkOx2tWZ8jAtzkdGL5iEZBGfH8wbDo4",
    authDomain: "octup-test.firebaseapp.com",
    projectId: "octup-test",
    storageBucket: "octup-test.appspot.com",
    messagingSenderId: "798222224073",
    appId: "1:798222224073:web:0b8b8d30917f3755371b18"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const storage = getStorage();

  // Create a child reference
  const imagesRef = ref(storage, 'apView');
  // imagesRef now points to 'images'

  // Ссылка на коллекцию "article1"
  const articlesRef = collection(db, 'article1');

  // Получение всех документов из коллекции "article1"
  const myArticles = [];
  let articleContainer = document.querySelector('.article-list-container');

  getDocs(articlesRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      myArticles.push({
        id: doc.id,
        ...doc.data()
      });
    });
    // Ваш код, зависящий от результата запроса, должен быть здесь
    let articleList = [...myArticles]
    const storage = getStorage();
    let apImgUrl = '';


    const promises = [];
const sortedProps = [];

for (let i = 0; i < articleList.length; i++) {
  const storageRef = ref(storage, `apView/ap${i}.png`);
  const promise = getDownloadURL(storageRef).then((url) => {
    const props = {
      date: myArticles[i].date,
      apTitle: myArticles[i].apTitle,
      apDescription: myArticles[i].apDescription,
      tags: articleList[i].tags,
      imageRef: url,
      cid: articleList[i].cid
    };
    sortedProps.push(props);
  });
  promises.push(promise);
}

    Promise.all(promises).then(() => {
      sortedProps.sort((a, b) => a.cid - b.cid); // Сортировка по cID
      sortedProps.forEach((props) => {
        const componentInstance = articlePreview(props);
        const componentElement = componentInstance.render();
        articleContainer.appendChild(componentElement);
      });
    
      let AP = document.querySelectorAll('.article-preview');
      AP.forEach(item => {
        item.addEventListener('click', (event) => {
          let childId = item.querySelector('.ap-read');
          let artId = childId.getAttribute('data-cid');
          const articleUrl = `article.html?id=${artId}`;
          window.location.href = articleUrl;
        })
      })
     
    }).catch((error) => {
      console.error(error);
    });
  });


