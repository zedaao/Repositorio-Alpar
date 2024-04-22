const iconWheather = document.getElementById("icon");
const dataWheather = document.getElementById("tempo");
const infoWheather = document.getElementById("info");
const umidadeWheather = document.getElementById("umidade");
const ventoWheather = document.getElementById("vento");
const nameWheather = document.getElementById("city");
const maxWheather = document.getElementById("maxima");
const minWheather = document.getElementById("min");
const input = document.getElementById("input");

ControllerWheather.instance = new ControllerWheather();

ControllerWheather.instance.showName();
ControllerWheather.instance.showTemp();
ControllerWheather.instance.showInfo();
ControllerWheather.instance.showWind();
ControllerWheather.instance.showUmidade();
ControllerWheather.instance.showMax();
ControllerWheather.instance.showMin();
