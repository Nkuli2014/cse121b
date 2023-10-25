document.getElementById("get-weather-btn").addEventListener("click", function() {
    const apiKey = "84ddada9fd5a4d28904c01f52fe1e486"; // Replace with your OpenWeatherMap API key
    const city = document.getElementById("city-input").value;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const mainWeather = data.weather[0].main;
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
  
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
          <h2>Weather in ${city}:</h2>
          <p>Main Weather: ${mainWeather}</p>
          <p>Description: ${description}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
        `;
      })
      .catch(error => {
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = "Error occurred while fetching weather data.";
        console.error(error);
      });
  });