const btnSala = document.querySelector(".btn-sala");
const btnQuarto = document.querySelector(".btn-quarto");
const btnCozinha = document.querySelector(".btn-cozinha");
const btnBanheiro = document.querySelector(".btn-banheiro");

const comodos = document.querySelectorAll(".luz");

Iluminacao.instance.registraObserver(Iluminacao.instance.addAtivo);

btnSala.addEventListener("click", Iluminacao.instance.addAtivo);

btnQuarto.addEventListener("click", Iluminacao.instance.addAtivo);

btnCozinha.addEventListener("click", Iluminacao.instance.addAtivo);

btnBanheiro.addEventListener("click", Iluminacao.instance.addAtivo);
