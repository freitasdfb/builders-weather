import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";
import { getWeather } from '../services/weather.service'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FaCaretUp, FaCaretDown, FaThermometerQuarter, FaWind } from "react-icons/fa";


function Home() {

  const [refreshFlag, setRefresh] = useState(true)
  const [weatherData, setWeatherData] = useState({
    name: '',
    weather: [{
      icon: '',
      description: ''
    }],
    main: {
      temp_max: 0,
      temp_min: 0,
      temp: 0
    },
    wind: {
      deg: 0,
      speed: 0
    }
  })

  useEffect(() => {

    if (refreshFlag) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon).then((res) => setWeatherData(res));
      });
    }
    console.log(weatherData)
    setRefresh(false)

  }, [refreshFlag])

  // Background mudando de acordo com horário

  return (
    <>
      <Card style={{ width: '18rem', color: 'black' }}>
        <Card.Title>
          {weatherData.name}'s weather
        </Card.Title>
        <Card.Subtitle>
          <FaThermometerQuarter /> {weatherData.main.temp} ºC
        </Card.Subtitle>
        <Card.Body>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
          <Card.Title style={{ textTransform: 'capitalize' }}>{weatherData.weather[0].description}</Card.Title>
          <Card.Subtitle>
            <div>
              <FaCaretUp style={{ color: 'green', fontSize: '20px' }} />
              {weatherData.main.temp_max} ºC
              <FaCaretDown style={{ color: 'red', fontSize: '20px' }} />
              {weatherData.main.temp_min} ºC
            </div>
            <div style={{ marginTop: '2%' }}>
              <FaWind /> Speed: {weatherData.wind.speed} km/h
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <div style={{ marginTop: '5%' }}>
        <Button variant="success" onClick={() => setRefresh(true)}>Refresh</Button>
      </div>
    </>
  );
}

export default Home;
