const btnSala = document.querySelector(".btn-sala");
const btnQuarto = document.querySelector(".btn-quarto");
const btnCozinha = document.querySelector(".btn-cozinha");
const btnBanheiro = document.querySelector(".btn-banheiro");

btnSala.addEventListener("click", () => {
  Iluminacao.instance.toggle("sala");
});

btnQuarto.addEventListener("click", () => {
  Iluminacao.instance.toggle("quarto");
});

btnCozinha.addEventListener("click", () => {
  Iluminacao.instance.toggle("cozinha");
});

btnBanheiro.addEventListener("click", () => {
  Iluminacao.instance.toggle("banheiro");
});

Iluminacao.instance.registraObserver(() => {
  if (Iluminacao.instance.getState("sala")) {
    btnSala.parentNode.classList.add("ativo");
  } else {
    btnSala.parentNode.classList.remove("ativo");
  }
});

Iluminacao.instance.registraObserver(() => {
  if (Iluminacao.instance.getState("quarto")) {
    btnQuarto.parentNode.classList.add("ativo");
  } else {
    btnQuarto.parentNode.classList.remove("ativo");
  }
});

Iluminacao.instance.registraObserver(() => {
  if (Iluminacao.instance.getState("cozinha")) {
    btnCozinha.parentNode.classList.add("ativo");
  } else {
    btnCozinha.parentNode.classList.remove("ativo");
  }
});

Iluminacao.instance.registraObserver(() => {
  if (Iluminacao.instance.getState("banheiro")) {
    btnBanheiro.parentNode.classList.add("ativo");
  } else {
    btnBanheiro.parentNode.classList.remove("ativo");
  }
});
