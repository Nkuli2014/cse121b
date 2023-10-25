// Get references to HTML elements
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherDisplay = document.getElementById('weatherDisplay');

// Function to display error messages
function displayError(message) {
    weatherDisplay.innerHTML = `<p class="error">${message}</p>`;
}

// Function to fetch weather data using Fetch and return JSON
async function fetchWeatherData(location) {
    const apiKey = 'cfd2b6cb7da06370f8c38c63631f1793'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        displayError("Error fetching weather data.");
    }
}

// Event listener for the search button
searchButton.addEventListener('click', async () => {
    const location = locationInput.value;
    if (location) {
        const data = await fetchWeatherData(location);
        if (data) {
            // Display the weather data
            const html = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            weatherDisplay.innerHTML = html;
        }
    } else {
        displayError("Please enter a location.");
    }
});