const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app_server/views/index.html');
});

app.post('/display', async (req, res) => {
  const cityName = req.body.city;
  const units = req.body.units;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b311db7788630d973dd696d130f5cba4&units=${units}`
    );

    

    const weatherData = {
      cityName: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
    };

    res.send(weatherData); // Send weather data as a JSON response
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred while fetching weather data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
