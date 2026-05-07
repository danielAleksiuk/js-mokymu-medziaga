export type WeatherData = {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number; 
        pressure: number; 
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    }
    timzone: number;
    visibility: number;
    weather: any[];
    wind: {
        deg: number;
        speed: number;
    }
}

