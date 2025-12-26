import { db } from "../data/firebase.js";
import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ===== APLICA TEMA GLOBAL =====
const tema = localStorage.getItem("tema") || "light";
document.documentElement.setAttribute("data-theme", tema);

// ===== UID LOGADO =====
const uid = localStorage.getItem("uid");

if (!uid) {
  window.location.href = "../login/login.html";
}

// ===== LOCALSTORAGE =====
const perfisLocal = JSON.parse(localStorage.getItem("perfis")) || {};

// ===== ELEMENTOS =====
const preview = document.getElementById("preview");
const bio = document.getElementById("bio");
const inputFoto = document.getElementById("inputFoto");
const btnSalvar = document.getElementById("btnSalvar");
const titulo = document.getElementById("tituloPerfil");

const ref = doc(db, "usuarios", uid);

// ===== CARREGAR PERFIL =====
async function carregarPerfil() {
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const dados = snap.data();

  titulo.innerText = `Perfil de ${dados.nome}`;
  preview.src = dados.foto || "../imagens/avatar.png";
  bio.value = dados.bio || "";

  perfisLocal[uid] = {
    nome: dados.nome,
    foto: dados.foto || ""
  };

  localStorage.setItem("perfis", JSON.stringify(perfisLocal));
}

carregarPerfil();

// ===== SALVAR PERFIL =====
async function salvarPerfil() {
  await updateDoc(ref, {
    bio: bio.value,
    foto: preview.src
  });

  perfisLocal[uid].foto = preview.src;
  localStorage.setItem("perfis", JSON.stringify(perfisLocal));

  alert("Perfil salvo!");
}

btnSalvar.addEventListener("click", salvarPerfil);

// ===== UPLOAD FOTO =====
inputFoto.addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
  };
  reader.readAsDataURL(file);
});

// ===== VOLTAR =====
function voltar() {
  window.history.back();
}

window.voltar = voltar;
