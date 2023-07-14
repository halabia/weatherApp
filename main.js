let key = '4d0963ecdbe44b779fc05637231207';

// how to get information from website
var displayCityName = document.getElementById('displayCityName')
var displayTemperature = document.getElementById('displayTemperature')
var displayCondition = document.getElementById('displayCondition')
var displayConditionImage = document.getElementById('displayConditionImage')


function getWeather() {
    var cityName = document.getElementById('cityInput').value;
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}&days=3`,
        { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            // const div = document.createElement("div");
            // div.setAttribute("id","cityBackground");
            // document.body.appendChild(div)

            displayCityName.innerHTML = response.location.name;
            displayTemperature.innerHTML = response.current.temp_c + '\xB0' + 'C';
            displayCondition.innerHTML = response.current.condition.text;
            displayConditionImage.src = 'https:' + response.current.condition.icon;
        })
    document.getElementById('cityInput').value = ''
}

var input = document.getElementById('cityInput');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submitButton").click();
    }
  });