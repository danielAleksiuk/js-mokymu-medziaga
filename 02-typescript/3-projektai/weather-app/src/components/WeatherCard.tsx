import type { WeatherData } from "../types/WeatherData";

type WeatherCardProps = {
    data: WeatherData;
}

const WeatherCard = (props: WeatherCardProps) => {
    return (
        <div className="weatherData">
            <h2>{props.data.name}</h2>
            <h3>{ new Date(props.data.dt * 1000).toLocaleDateString()}</h3>
            <p className="temperature">{ props.data.main.temp } C</p>
            <p className="description">{props.data.weather[0].description}</p>
            <p>wind speed: {props.data.wind.speed}</p>
        </div>
    )
}

export default WeatherCard;