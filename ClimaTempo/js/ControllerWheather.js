class ControllerWheather {
  static instance;
  data;
  view;
  constructor() {
    this.data = new ModelWheather();
    this.view = new ViewWheather();
  }

  showName() {
    if (this.data.getName()) {
      this.view.changeCity();
    }
  }

  showTemp() {
    if (this.data.getTempo()) {
      this.view.climaChange();
    }
  }
  showTempMax() {
    this.data.getmaxTempo();
  }

  showTempMin() {
    this.data.getminTempo();
  }

  showInfo() {
    if (this.data.getInfo()) {
      this.view.description();
    }
  }

  showWind() {
    if (this.data.getWind()) {
      this.view.windChange();
    }
  }

  showUmidade() {
    if (this.data.getUmidade()) {
      this.view.umidadeChange();
    }
  }
}
ControllerWheather.instance = new ControllerWheather();
