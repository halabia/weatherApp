// weatherAPI Key
let key = '4d0963ecdbe44b779fc05637231207';

// set variable names for all different visual components
var displayCityName = document.getElementById('displayCityName')
var displayTemperature = document.getElementById('displayTemperature')
var displayCondition = document.getElementById('displayCondition')
var displayConditionImage = document.getElementById('displayConditionImage')

var displayDate1 = document.getElementById('displayDate1')
var displayTemperature1 = document.getElementById('displayTemperature1')
var displayCondition1 = document.getElementById('displayCondition1')
var displayConditionImage1 = document.getElementById('displayConditionImage1')

var displayDate2 = document.getElementById('displayDate2')
var displayTemperature2 = document.getElementById('displayTemperature2')
var displayCondition2 = document.getElementById('displayCondition2')
var displayConditionImage2 = document.getElementById('displayConditionImage2')

var cityBackgroundEmpty = document.getElementById('cityBackgroundEmpty')
var cityBackgroundEmpty1 = document.getElementById('cityBackgroundEmpty1')
var cityBackgroundEmpty2 = document.getElementById('cityBackgroundEmpty2')

// retrieve and display weather data from API
function getWeather() {

    // retrieve user input
    var cityName = document.getElementById('cityInput').value;

    cityBackgroundEmpty.setAttribute("id","cityBackground")
    cityBackgroundEmpty1.setAttribute("id","cityBackground1")
    cityBackgroundEmpty2.setAttribute("id","cityBackground2")

    // fetch 3 days of data based on user inputted location
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}&days=3`,
        { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);

            // alter visual displays with retrieved API data
            displayCityName.innerHTML = response.location.name;
            displayTemperature.innerHTML = response.current.temp_c + '\xB0' + 'C';
            displayCondition.innerHTML = response.current.condition.text;
            displayConditionImage.src = 'https:' + response.current.condition.icon;

            displayDate1.innerHTML = response.forecast.forecastday[1].date;
            displayTemperature1.innerHTML = response.forecast.forecastday[1].day.avgtemp_c+ '\xB0' + 'C';
            displayCondition1.innerHTML = response.forecast.forecastday[1].day.condition.text;
            displayConditionImage1.src = 'https:' + response.forecast.forecastday[1].day.condition.icon;
            
            displayDate2.innerHTML = response.forecast.forecastday[2].date;
            displayTemperature2.innerHTML = response.forecast.forecastday[2].day.avgtemp_c + '\xB0' + 'C';
            displayCondition2.innerHTML = response.forecast.forecastday[2].day.condition.text;
            displayConditionImage2.src = 'https:' + response.forecast.forecastday[2].day.condition.icon;
        })

    // clear input field after every query
    document.getElementById('cityInput').value = ''
}

// enable use of enter key to submit form
var input = document.getElementById('cityInput');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submitButton").click();
    }
  });