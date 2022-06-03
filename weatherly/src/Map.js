import "./index.css"
import { GoogleMap, useLoadScript} from "@react-google-maps/api";

export default function Home() {
    const {} = useLoadScript({
        googleMapsApiKey: "AIzaSyAHKVJZeVmEuvhIfiIIblC5YF_CaKRtmWI",
    });

    return <Map />

}

function Map() {
    return  (
        <GoogleMap
        zoom={10}
        center={{ lat: 13.0333, lng: 55.5833 }}
        mapContainerClassName="map-container">

        </GoogleMap>
    );
}