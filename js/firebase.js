'use strict'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import { setPersistence, signInWithRedirect } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import { inMemoryPersistence, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
document.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCAlkOx2tWZ8jAtzkdGL5iEZBGfH8wbDo4",
    authDomain: "octup-test.firebaseapp.com",
    projectId: "octup-test",
    storageBucket: "octup-test.appspot.com",
    messagingSenderId: "798222224073",
    appId: "1:798222224073:web:0b8b8d30917f3755371b18"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Получите объект аутентификации Firebase
  const auth = getAuth();

  let form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.querySelector('#auth-email');
    let password = document.querySelector('#auth-password');

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(function (userCredential) {
        // Успех
        var user = userCredential.user;
      })
      .catch(function (error) {
        // Ошибка аутентификации 
        let errorCode = error.code;
        let errorMsg = error.message;
        console.error(errorCode, errorMsg);
      })
  })
  setPersistence(auth, inMemoryPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider();
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return signInWithRedirect(auth, provider);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})