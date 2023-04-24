import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDwe0r8ZwU5iIPITxHzIK7zi4pDWdjY1s0',
  authDomain: 'chat-web-app-62782.firebaseapp.com',
  databaseURL: 'https://chat-web-app-62782-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-62782',
  storageBucket: 'chat-web-app-62782.appspot.com',
  messagingSenderId: '72586914461',
  appId: '1:72586914461:web:e7b4e7ae7e66db5d130274',
};

const app = firebase.initializeApp(config);
