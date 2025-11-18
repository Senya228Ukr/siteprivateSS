// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxwv66UPDu27D8xuefbUUNsLGkxfnCB-0",
  authDomain: "sitesenya.firebaseapp.com",
  projectId: "sitesenya",
  storageBucket: "sitesenya.appspot.com",
  messagingSenderId: "991260229380",
  appId: "1:991260229380:web:d558dd64ff357722751a51",
  measurementId: "G-GZVF9VW5K9"
};

const app = initializeApp(firebaseConfig);

// глобальные переменные
window.db = getFirestore(app);
window.storage = getStorage(app);
