import { MAP_TOKEN } from "../utils/constants";
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapContainer = () => {
    return (
        <Map
            mapboxAccessToken={MAP_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
                }}
            style={{width: 600, height: 400}}
        />
    )
};

export default MapContainer;