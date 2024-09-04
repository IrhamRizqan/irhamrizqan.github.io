/* --------------- Weather Web App  --------------------- */
let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

//Make sure you have your own key.
let key = "171e009cae7e126fcbcec49c3a5cee6a";

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        show.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1><br>
        <h3>Feels like: ${data.main.feels_like}&#176;</h3>

        <div class="temp_container">
         <div>
            <h4 class="title">Humidity</h4>
            <h4 class="temp">${data.main.humidity} %</h4>
         </div>
         <div>
            <h4 class="title">Pressure</h4>
            <h4 class="temp">${data.main.pressure} hPa</h4>
         </div>
         <div>
            <h4 class="title">Wind Speed</h4>
            <h4 class="temp">${data.wind.speed} m/s</h4>
         </div>   
         <div>
            <h4 class="title">Wind Direction</h4>
            <h4 class="temp">${data.wind.deg} degrees</h4>
         </div>  
        </div>
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};
search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);