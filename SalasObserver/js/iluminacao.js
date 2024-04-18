class Iluminacao {
  static instance;
  observers = [];
  sala = false;
  quarto = false;
  cozinha = false;
  banheiro = false;

  toggle(comodo) {
    if (comodo == "sala") {
      this.sala = !this.sala;
    }
    if (comodo == "quarto") {
      this.quarto = !this.quarto;
    }
    if (comodo == "cozinha") {
      this.cozinha = !this.cozinha;
    }
    if (comodo == "banheiro") {
      this.banheiro = !this.banheiro;
    }
    this.executaObservers();
  }

  getState(comodo) {
    if (comodo == "sala") {
      return this.sala;
    }
    if (comodo == "quarto") {
      return this.quarto;
    }
    if (comodo == "cozinha") {
      return this.cozinha;
    }
    if (comodo == "banheiro") {
      return this.banheiro;
    }
  }

  registraObserver(obeserver) {
    this.observers.push(obeserver);
  }

  executaObservers() {
    this.observers.forEach((func) => {
      func();
    });
  }
}

Iluminacao.instance = new Iluminacao();
