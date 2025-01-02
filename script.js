const apiKey = 'SGHW8L3KPR5MXBH6HUK3E2YE3'; // Your actual API key

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const descElement = document.querySelector('.description');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        // Update UI with weather data
        cityElement.textContent = data.name;
        tempElement.textContent = `${Math.round(data.main.temp)}°C`;
        descElement.textContent = data.weather[0].description;
        humidityElement.textContent = `${data.main.humidity}%`;
        windElement.textContent = `${data.wind.speed} km/h`;
    } catch (error) {
        alert(error.message);
    }
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    }
}); 