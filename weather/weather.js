const city = document.querySelector(".city");
const currentTemp = document.querySelector(".current-temp");
const tempMax = document.querySelector(".temp-max");
const tempMin = document.querySelector(".temp-min");
const icon = document.querySelector(".icon");
const absTemp = 273.15;
navigator.geolocation.getCurrentPosition(function (position) {
  //console.log(position);
  const myFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=3e3d8be7257c275a879c21fc82a6dedb`);
  myFetch
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      city.textContent = result.name;
      currentTemp.textContent = result.main.temp - absTemp;
      tempMax.textContent = result.main.temp_max - absTemp;
      tempMin.textContent = result.main.temp_min - absTemp;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png">`;
      //http://openweathermap.org/img/wn/10d@2x.png
    })
    .catch();
});
