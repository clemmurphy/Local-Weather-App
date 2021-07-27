window.addEventListener("load", () =>{ // Do all this once page has loaded
  let long;
  let lat;
  let temperature = document.querySelector('.temperature');
  let location = document.querySelector('.location');
  let weather = document.querySelector('.weather');
  let weatherIcon = document.getElementById('weatherIcon')

// Get geolocation data
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

    const weatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d5007345301318eebf5843e941b4dd1c`;

      fetch(weatherData)
// Get API data and convert to JSON
        .then (response => {
          return response.json();
        })
        .then (data => {
          console.log(data);
          let currentTemp = data.main.temp;
          let weatherIconID = data.weather[0].icon
// Set DOM elements
          temperature.textContent = (data.main.temp - 273.15).toFixed(1) + '°C';
          location.textContent = data.name;
          weather.textContent = data.weather[0].description;
          weatherIcon.src = `http://openweathermap.org/img/wn/${weatherIconID}@2x.png`
        })  
    });
  }
});