import "./index.css"
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function Home() {
    const { isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAHKVJZeVmEuvhIfiIIblC5YF_CaKRtmWI",
    });

    if (!isLoaded) return <div>Loading...</div>
    return <Map />

}

function Map() {
    return  (
        <GoogleMap
        zoom={12}
        center={{ lat: 55.60587, lng: 13.00073 }}
        mapContainerClassName="map-container">

        </GoogleMap>
    );
}