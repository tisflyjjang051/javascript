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
      icon.innerHTML = `<img src="./images/icons/${result.weather[0].icon}.png">`;
      //http://openweathermap.org/img/wn/10d@2x.png
    })
    .catch();
});

fetch("https://dapi.kakao.com/v2/translation/translate", {
  headers: {
    Authorization: "KakaoAK 6b2baf1cf6415f955c240557b86a01e2",
  },
  type: "POST",
  contentType: "application/x-www-form-urlencoded",
  data: {
    src_lang: "kr",
    target_lang: "en",
    query: "부산",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
  });
