// // app.js

// // Function to make an API request and update the weather information
// async function getWeatherData(cityName, units) {
//     try {
//       const apiKey = 'b311db7788630d973dd696d130f5cba4'; // Replace with your OpenWeather API key
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       console.log('API URL:', apiUrl);
//       console.log('API Response:', data);
  
//       // Update the weather information
//       document.getElementById('city-name').textContent = `City: ${data.name}`;
//       document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`; // You can format this as needed
//       document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   }
  
//   // Event listener for form submission
//   document.getElementById('weather-form').addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent the form from submitting normally
  
//     // Get user input
//     const cityName = document.getElementById('city-input').value;
//     const units = document.getElementById('unit-select').value;
  
//     // Call the function to get weather data
//     getWeatherData(cityName, units);
//   });
  