import { auth, db } from "../data/firebase.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loginGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const ref = doc(db, "usuarios", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      nome: user.displayName,
      foto: user.photoURL,
      email: user.email,
      bio: ""
    });
  }

  localStorage.setItem("uid", user.uid);

  const perfis = JSON.parse(localStorage.getItem("perfis")) || {};
  perfis[user.uid] = {
    nome: user.displayName,
    foto: user.photoURL
  };
  localStorage.setItem("perfis", JSON.stringify(perfis));

  window.location.href = "../index.html";
}

window.loginGoogle = loginGoogle;
