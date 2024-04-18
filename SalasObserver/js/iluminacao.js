class Iluminacao {
  static instance;
  observers = [];

  constructor() {
    if (Iluminacao.instance) {
      return Iluminacao.instance;
    }
    Iluminacao.instance = this;
  }
  addAtivo = (event) => {
    if (event) {
      event.target.parentNode.classList.toggle("ativo");
      this.executaObservers();
    }
  };

  registraObserver(obeserver) {
    this.observers.push(obeserver);
  }

  removerObserver(observer) {
    const index = this.observers.findIndex((func) => func == observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  executaObservers() {
    for (let observer of this.observers) {
      observer();
    }
  }
}

Iluminacao.instance = new Iluminacao();
