import { useEffect, useState } from "react"
import WeatherCard from "./components/WeatherCard"
import WeatherForm from "./components/WeatherForm"


function App() {
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    console.log('city pasikeite')

    https://api.openweathermap.org/data/2.5/weather?q=London&appid=68797b06fddedf2781f9a820196a2aab&units=metric
  }, [city])

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <WeatherForm setCity={setCity}/>
      <WeatherCard/>
    </div>
  )
}

export default App
