class ViewWheather {
  static instance;
  data;
  constructor() {
    this.data = new ModelWheather();
  }

  async climaChange() {
    dataWheather.innerHTML = await this.data.getTempo();
  }

  async description() {
    const data = await this.data.getInfo();
    infoWheather.innerText = data;
  }

  async changeIcon() {
    const data = await this.data.getIcon();
    console.log(data);
    iconWheather.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data}@2x.png`
    );
  }

  async changeCity() {
    const data = await this.data.getName();
    nameWheather.innerText = data;
  }

  async windChange() {
    const data = await this.data.getWind();
    ventoWheather.innerText = `${data} km/h`;
  }

  async umidadeChange() {
    const data = await this.data.getUmidade();
    umidadeWheather.innerText = `${data} %`;
  }
}
