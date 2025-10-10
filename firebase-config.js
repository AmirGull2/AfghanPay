// Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyDCcKpU-6lPnjn7NSTZVq6R5HGLac2GlAk",
  authDomain: "zaroratpay.firebaseapp.com",
  databaseURL: "https://zaroratpay-default-rtdb.firebaseio.com",
  projectId: "zaroratpay",
  storageBucket: "zaroratpay.firebasestorage.app",
  messagingSenderId: "992212281257",
  appId: "1:992212281257:web:bf5e442cc2636725ee06b8",
  measurementId: "G-51VT4W8MYZ"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
