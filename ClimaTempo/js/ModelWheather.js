class ModelWheather {
  static instance;
  data;
  constructor() {
    this.data = new WheatherService();
  }

  getData(cidadede) {
    return cidadede;
  }

  async getName() {
    const weatherData = await this.data.getWheather();
    return weatherData.name;
  }

  async getTempo() {
    const weatherData = await this.data.getWheather();
    return weatherData.main.temp;
  }

  async getminTempo() {
    const weatherData = await this.data.getWheather();
    return weatherData.main.temp_min;
  }
  async getmaxTempo() {
    const weatherData = await this.data.getWheather();
    return weatherData.main.temp_max;
  }

  async getInfo() {
    const weatherData = await this.data.getWheather();

    return weatherData.weather[0].description;
  }

  async getIcon() {
    const weatherData = await this.data.getWheather();

    return weatherData.weather[0].icon;
  }

  async getWind() {
    const weatherData = await this.data.getWheather();
    return weatherData.wind.speed;
  }

  async getUmidade() {
    const weatherData = await this.data.getWheather();
    return weatherData.main.humidity;
  }
}
