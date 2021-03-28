let weather = {
    apikey : "2384cb9d78d966ace506d00bf057ee5a",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid="
        + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, temp_min, temp_max, feels_like, humidity, pressure} = data.main;
        const {speed} = data.wind;
        const {country, sunrise, sunset} = data.sys;
        const {visibility} = data;
        const v = visibility / 1000;
        const p = parseInt(pressure).toLocaleString('en-IN');

        document.getElementById('city').innerText = "Weather in " + name;
        document.getElementById('temp').innerText = temp + "°C";
        document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById('description').innerText = description;
        document.getElementById('humidity').innerText = "Humidity : " + humidity + " %";
        document.getElementById('wind').innerText = "Wind Speed : " + speed + " km/h";
        document.getElementById('cont').innerHTML = country;
        document.getElementById('min').innerHTML = "Min " + temp_min + "°C";
        document.getElementById('max').innerHTML = "Max " + temp_max + "°C";
        document.getElementById('feels').innerHTML = "Feels like " + feels_like + "°C";
        document.getElementById('visibility').innerHTML = "Visibility : " + v + " km";
        document.getElementById('pressure').innerHTML = "Pressure : " + p + " mBar";
    },
    search: function(){
        this.fetchWeather(document.getElementById('search-bar').value);
    }   
}
document.getElementById("btn").addEventListener("click", function(){
    weather.search();
});
document.getElementById("search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("delhi");

function rel(){
    window.location.reload();
}
