let key = '4d0963ecdbe44b779fc05637231207';

// how to get information from website
var displayCityName = document.getElementById('displayCityName')


function getWeather() {
    var cityName = document.getElementById('cityInput').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`,
    { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        displayCityName.innerHTML = response.location.name
    })
    document.getElementById('cityInput').value=''
}