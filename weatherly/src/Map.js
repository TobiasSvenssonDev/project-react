import "./index.css"
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function Home(props) {
    const location = {lat: parseFloat(props.lat.toFixed(2)), lng: parseFloat(props.lon.toFixed(2))}

    const { isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAHKVJZeVmEuvhIfiIIblC5YF_CaKRtmWI",
    });

    if (!isLoaded) return <div>Loading...</div>
    return (<GoogleMap
    zoom={12}
    center={ location }
    mapContainerClassName="map-container">

    </GoogleMap>)

}

