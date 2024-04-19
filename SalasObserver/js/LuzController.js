class LuzController {
  static instance;
  observers = [];
  data;
  view;
  constructor() {
    this.view = new LuzView();
    this.data = new LuzesModel();
  }

  toggleOnSala() {
    this.data.sala = !this.data.sala;
    if (this.data.sala) {
      this.view.turOnSala();
    } else {
      this.view.turOffSala();
    }

    this.executaObservers();
  }

  toggleOnQuarto() {
    this.data.quarto = !this.data.quarto;
    if (this.data.quarto) {
      this.view.turOnQuarto();
    } else {
      this.view.turOffQuarto();
    }
    this.executaObservers();
  }

  toggleOnCozinha() {
    this.data.cozinha = !this.data.cozinha;
    if (this.data.cozinha) {
      this.view.turOnCozinha();
    } else {
      this.view.turOffCozinha();
    }
    this.executaObservers();
  }

  toggleOnBanheiro() {
    this.data.banheiro = !this.data.banheiro;
    if (this.data.banheiro) {
      this.view.turOnBanheiro();
    } else {
      this.view.turOffBanheiro();
    }
    this.executaObservers();
  }

  registraObserver(obeserver) {
    this.observers.push(obeserver);
  }

  executaObservers() {
    this.observers.forEach((func) => {
      func(data);
    });
  }
}

LuzController.instance = new LuzController();
