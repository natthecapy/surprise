// ABRIR CARTA
function abrirCarta() {
  document.querySelector(".envelope").classList.add("aberta");

  const botao = document.querySelector("button");
  setTimeout(() => {
  botao.classList.add("mostrar");
}, 400);
}


// FADE + IR PRA MÚSICA
function irParaMusica() {
  document.body.classList.remove("show");
  setTimeout(() => {
    window.location.href = "musica.html";
  }, 800);
}

// CORAÇÕES
function criarCoracao() {
  const coracao = document.createElement("span");
  coracao.innerHTML = "❤️";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 10 + 15 + "px";
  document.querySelector(".coracoes").appendChild(coracao);

  setTimeout(() => coracao.remove(), 6000);
}

setInterval(criarCoracao, 400);

// MÚSICA
function tocarMusica() {
  const audio = document.getElementById("audio");
  audio.play();
  document.querySelector(".disco").classList.add("girando");
}

const music = document.getElementById("music");
const disc = document.querySelector(".disc");

function toggleMusic() {
  if (music.paused) {
    music.play();
    disc.classList.add("playing");
  } else {
    music.pause();
    disc.classList.remove("playing");
  }
}
