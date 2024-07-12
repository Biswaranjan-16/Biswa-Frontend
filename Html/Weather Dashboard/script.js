document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
    const getWeatherBtn = document.getElementById('get-weather-btn');

    getWeatherBtn.addEventListener('click', getWeather);

    function getWeather() {
        const cityName = cityInput.value.trim();
        if (cityName !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        displayWeather(data);
                    } else {
                        displayError(data.message);
                    }
                })
                .catch(error => {
                    displayError('An error occurred while fetching the weather data.');
                });
        }
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        weatherInfo.innerHTML = `
            <h3>Weather in ${name}</h3>
            <p><strong>Temperature:</strong> ${main.temp} °C</p>
            <p><strong>Humidity:</strong> ${main.humidity} %</p>
            <p><strong>Condition:</strong> ${weather[0].description}</p>
        `;
        weatherInfo.style.display = 'block';
    }

    function displayError(message) {
        weatherInfo.innerHTML = `<p class="text-danger">${message}</p>`;
        weatherInfo.style.display = 'block';
    }
});
