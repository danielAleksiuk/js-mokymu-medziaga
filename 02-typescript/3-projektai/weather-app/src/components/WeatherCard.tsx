import type { WeatherData } from "../types/WeatherData";

type WeatherCardProps = {
    data: WeatherData;
}

const WeatherCard = (props: WeatherCardProps) => {
    return (
        <>
            <h1>miesto oru prognoze</h1>
        </>
    )
}

export default WeatherCard;