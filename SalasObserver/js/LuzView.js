const btnSala = document.querySelector(".btn-sala");
const btnQuarto = document.querySelector(".btn-quarto");
const btnCozinha = document.querySelector(".btn-cozinha");
const btnBanheiro = document.querySelector(".btn-banheiro");

class LuzView {
  turOnSala() {
    btnSala.parentNode.classList.add("ativo");
  }
  turOffSala() {
    btnSala.parentNode.classList.remove("ativo");
  }

  turOnQuarto() {
    btnQuarto.parentNode.classList.add("ativo");
  }
  turOffQuarto() {
    btnQuarto.parentNode.classList.remove("ativo");
  }

  turOnCozinha() {
    btnCozinha.parentNode.classList.add("ativo");
  }
  turOffCozinha() {
    btnCozinha.parentNode.classList.remove("ativo");
  }

  turOnBanheiro() {
    btnBanheiro.parentNode.classList.add("ativo");
  }
  turOffBanheiro() {
    btnBanheiro.parentNode.classList.remove("ativo");
  }
}
