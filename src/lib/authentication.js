import { home } from '../views/homepage/index.js';
import { onNavigate } from '../navigate.js';

export const loginWithGoogleAccount = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  window.history.pushState(null, null, '#homepage');
};

export const loginWithEmailAndPassword = (userEmail, userPassword) => {
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      onNavigate('/home');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const createWithEmailAndPassword = (emailInput, passwordInput) => {
  firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      alert('Cadastro realizado com sucesso');
      onNavigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert('Falha ao cadastrar')
    });
};