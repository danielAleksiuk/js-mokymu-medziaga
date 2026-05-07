import { useEffect, useState } from "react"
import WeatherCard from "./components/WeatherCard"
import WeatherForm from "./components/WeatherForm"
import useFetch from "./hooks/useFetch";
import { type WeatherData } from "./types/WeatherData";
import './App.css';

const API_TOKEN = '68797b06fddedf2781f9a820196a2aab';

function App() {
  const [city, setCity] = useState<string>('');
  const {data, makeApiCall} = useFetch();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_TOKEN}&units=metric`;
      makeApiCall(url);
    }
  }, [city]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setWeatherData(data);
    }
  }, [data])

  return (
    <div className="weather-card">
      <WeatherForm setCity={setCity}/>
      { weatherData && <WeatherCard data={weatherData}/>}
    </div>
  )
}

export default App
