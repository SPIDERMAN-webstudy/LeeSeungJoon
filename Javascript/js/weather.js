const API_KEY = "790e7700eb9d18dd9afe131498bf3416";

function successGeo(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.getElementById("weather");
      const name = data.name;
      const temp = data.main.temp;
      const sky = data.weather[0].main;
      weatherContainer.querySelector("span:nth-child(1)").innerText = name;
      weatherContainer.querySelector("span:nth-child(2)").innerText =
        temp + "℃";
      weatherContainer.querySelector("span:nth-child(3)").innerText = sky;
    });
}
function failGeo() {
  alert("Cannot get your position");
}
navigator.geolocation.getCurrentPosition(successGeo, failGeo);
