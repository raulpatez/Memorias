import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUPjHI3B1A_tAcCYazqDTJ2EV4JB7vgyQ",
  authDomain: "bexigas-5fbf7.firebaseapp.com",
  projectId: "bexigas-5fbf7",
  storageBucket: "bexigas-5fbf7.appspot.com",
  messagingSenderId: "483902151400",
  appId: "1:483902151400:web:fc9f102cb5b86f0057c75d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
