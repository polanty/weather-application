let weather = new weatherapi();
let ui = new UI();
const submit = document.querySelector(".main-button");

const entryInput = document.querySelector("#searchinput");

const geoLocation = navigator.geolocation.getCurrentPosition(
  async (position) => {
    try {
      const { longitude, latitude } = position.coords;
      const response = await weather.getweatherFromCoord(longitude, latitude);
      return ui.paint(response);
    } catch (error) {
      alert(error.message);
      return;
    }
  },
  () => {
    alert("The browser could not get your position");
    return;
  }
);

// get weather on DOM load since the method has been passed into a funtion.
// loading by when DOM is loaded

const getweather = async () => {
  try {
    const weatherFeedback = await weather.getweather();
    if (weatherFeedback.cod != 200) {
      throw new Error("There was an Error fetching the weather Information");
    }
    return ui.paint(weatherFeedback);
  } catch (error) {
    const newElement = document.createElement("div");
    newElement.textContent = `${error.message}`;

    // Insert the new text node after the target element
    entryInput.insertAdjacentElement("beforebegin", newElement);

    // Get a reference to the text node adjacent to the target element
    const adjacentTextNode = entryInput.previousSibling;

    // Remove the adjacent text node
    setTimeout(() => {
      adjacentTextNode.remove();
    }, 2000);
    return;
  }
};

submit.addEventListener("click", async function () {
  let city = document.getElementById("searchinput").value;
  if (!city) {
    alert("A city must be entered");
    return;
  }
  weather.changeLocation(city);

  try {
    await getweather();
    ui.clearfields();
  } catch (error) {
    alert(error.message);
  }
});
