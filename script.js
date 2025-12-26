/* PERFIS (DECLARA UMA VEZ) */
const perfis = JSON.parse(localStorage.getItem("perfis")) || {};

/* REVEAL */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* CARROSSEL */
const carrossel = document.getElementById("carrossel");

function avancarCarrossel() {
  if (carrossel) carrossel.scrollLeft += 250;
}

function voltarCarrossel() {
  if (carrossel) carrossel.scrollLeft -= 250;
}

// ===== RANKING =====
const rankingDiv = document.getElementById("lista-ranking");

if (rankingDiv) {
  const resultados = JSON.parse(localStorage.getItem("resultados")) || {};
  let ranking = [];

  for (let uid in resultados) {
    let total = 0;
    let qtd = 0;

    const quizzes = resultados[uid] || {};

    for (let quiz in quizzes) {
      total += quizzes[quiz];
      qtd++;
    }

    ranking.push({
      uid,
      nome: perfis[uid]?.nome || "Visitante",
      media: qtd ? (total / qtd).toFixed(1) : 0
    });
  }

  ranking.sort((a, b) => b.media - a.media);
  rankingDiv.innerHTML = "";

  ranking.forEach((item, i) => {
    const foto = perfis[item.uid]?.foto || "avatar.png";

    rankingDiv.innerHTML += `
      <div class="rank-item">
        <a href="perfil/perfil.html">
          <img src="${foto}">
        </a>
        <span>${i + 1}º - ${item.nome} | Média: ${item.media}</span>
      </div>
    `;
  });
}


// ===== HEADER =====
const usuarioLogado = localStorage.getItem("uid");
const perfilHeader = document.getElementById("perfilHeader");

if (perfilHeader && usuarioLogado) {
  perfilHeader.src = perfis[usuarioLogado]?.foto || "avatar.png";
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("uid");
  localStorage.removeItem("quizAtual");
  window.location.href = "login/login.html";
}
window.logout = logout;

// ===== THEME =====
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const temaSalvo = localStorage.getItem("tema") || "light";
  document.documentElement.setAttribute("data-theme", temaSalvo);
  themeToggle.checked = temaSalvo === "dark";

  themeToggle.addEventListener("change", () => {
    const novo = themeToggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", novo);
    localStorage.setItem("tema", novo);
  });
}

// ===== COR DE DESTAQUE =====
const corSalva = localStorage.getItem("accent");
if (corSalva) {
  document.documentElement.style.setProperty("--accent", corSalva);
}

// ===== SLIDESHOW =====
const imagensGrupo = ["grupo1.png", "grupo2.png", "grupo3.png"];
let indiceBanner = 0;
const bannerGrupo = document.getElementById("bannerGrupo");

if (bannerGrupo) {
  setInterval(() => {
    bannerGrupo.classList.remove("fade-in");
    bannerGrupo.classList.add("fade-out");

    setTimeout(() => {
      indiceBanner = (indiceBanner + 1) % imagensGrupo.length;
      bannerGrupo.src = imagensGrupo[indiceBanner];
      bannerGrupo.classList.remove("fade-out");
      bannerGrupo.classList.add("fade-in");
    }, 1800);
  }, 6500);
}
