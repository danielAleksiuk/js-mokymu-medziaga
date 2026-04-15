import { MAP_TOKEN } from "../utils/constants";
import Map, {Marker} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";

const MapContainer = (props) => {
    const [viewPort, setViewPort] = useState({
        longitude: props.longitude,
        latitude: props.latitude,
        zoom: 15,
        width: '100%',
        height: '100%'
    });

    return (
        <Map
            mapboxAccessToken={MAP_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            {...viewPort}

        />
    )
};

export default MapContainer;