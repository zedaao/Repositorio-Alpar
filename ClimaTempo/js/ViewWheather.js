class ViewWheather {
  static instance;
  data;
  constructor() {
    this.data = new ModelWheather();
  }

  async climaChange() {
    const data = await this.data.getTempo();

    dataWheather.innerHTML = ` ${Math.round(data)} º`;
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

  async changeMax() {
    const data = await this.data.getmaxTempo();
    maxWheather.innerText = `${Math.round(data)} º`;
  }

  async changeMin() {
    const data = await this.data.getmin();
    minWheather.innerText = `${Math.floor(data)} º`;
    console.log(data);
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
    umidadeWheather.innerText = `${data}%`;
  }
}
