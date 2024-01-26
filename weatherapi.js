class weatherapi {
  constructor(cityName) {
    this.apiKey = "9d9ab7c449da98d6f6140f5e36a4de5c";
    this.cityName = cityName;
    this.base = "https://api.openweathermap.org/data/2.5/";
  }

  async getweather() {
    const response = await fetch(
      `${this.base}weather?q=${this.cityName}&appid=${this.apiKey}`
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("This country Cannot be found");
    }
    const reponseData = await response.json();

    return reponseData;
  }

  async getweatherFromCoord(long, lat) {
    const response = await fetch(
      `${this.base}weather?lat=${lat}&lon=${long}&appid=${this.apiKey}`
    );
    if (response.status !== 200) {
      throw new Error("This country Cannot be found");
    }
    const reponseData = await response.json();
    return reponseData;
  }

  changeLocation(cityName) {
    this.cityName = cityName;
  }
}
