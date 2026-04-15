import { MAP_TOKEN } from "../utils/constants";
import Map, {Marker, ScaleControl} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from "react";

const MapContainer = (props) => {
    const [viewPort, setViewPort] = useState({
        longitude: props.longitude,
        latitude: props.latitude,
        zoom: 5,
        width: '100%',
        height: '100%',
    });

    useEffect(() => {
        const tmp = {...viewPort};
        tmp.latitude = props.latitude;
        tmp.longitude = props.longitude;
        tmp.zoom = 15;

        setViewPort(tmp);

    }, [props])

    return (
        <Map
            mapboxAccessToken={MAP_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            {...viewPort}
            onMove= {(viewPort) => setViewPort(viewPort.viewState)}
        >
            <Marker
                longitude={props.longitude}
                latitude={props.latitude}
                
            >

            </Marker>
        </Map>
    )
};

export default MapContainer;