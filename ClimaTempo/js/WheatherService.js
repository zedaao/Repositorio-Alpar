const osaka = "São Paulo";

class WheatherService {
  static instance;

  key;
  city;
  constructor() {
    this.key = "24429cfa49657bdf4463fe78d23592df";
    this.city = osaka;
  }

  async getWheather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric&lang=pt_br`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error");
    }
  }
}

WheatherService.instance = new WheatherService();
