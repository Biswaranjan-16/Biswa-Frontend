document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY';
    const city = 'New York';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayWeather(data) {
        const cityElement = document.getElementById('city');
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const humidityElement = document.getElementById('humidity');
        const windSpeedElement = document.getElementById('wind-speed');

        cityElement.textContent = data.name;
        temperatureElement.textContent = data.main.temp;
        descriptionElement.textContent = data.weather[0].description;
        humidityElement.textContent = data.main.humidity;
        windSpeedElement.textContent = data.wind.speed;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY'; 
    const city = 'New York';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayWeather(data) {
        const cityElement = document.getElementById('city');
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const humidityElement = document.getElementById('humidity');
        const windSpeedElement = document.getElementById('wind-speed');

        cityElement.textContent = data.name;
        temperatureElement.textContent = data.main.temp;
        descriptionElement.textContent = data.weather[0].description;
        humidityElement.textContent = data.main.humidity;
        windSpeedElement.textContent = data.wind.speed;
    }
});
