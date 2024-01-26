class UI {
  constructor() {
    this.location = document.getElementById("country-name");
    this.temperature = document.getElementById("temperature");
    this.description = document.getElementById("description");
    this.humidity = document.getElementById("humidity");
    this.visibility = document.getElementById("visibility");
    this.tempIcon = document.getElementById("temp-icon");
    this.clearcity = document.getElementById("searchinput");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.temperature.textContent = `${Math.floor(
      weather.main.temp - 273.15
    )}°C`;
    this.description.textContent = weather.weather[0].description;
    this.humidity.textContent = weather.main.humidity;
    this.visibility.textContent = weather.visibility;
  }

  clearfields() {
    document.getElementById("searchinput").value = "";
  }
}
