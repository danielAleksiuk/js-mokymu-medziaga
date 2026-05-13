import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
type ForecastProps = {
  lon: number;
  lat: number;
};
function Forecast(props: ForecastProps) {
  const { data, makeApiCall } = useFetch();
  const [forecastData, setForecastData] = useState();
  const apiKey: string = "2121d2192e85919bb6a7d9416e5774a2";
  
  useEffect(() => {
    if (props) {
      const forecastApi: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`;
      makeApiCall(forecastApi);
    }
  }, [props]);
  useEffect(() => {
    if (data) {
      setForecastData(data);
      console.log(forecastData);
    }
  }, [data]);

  return <></>;
}
export default Forecast;