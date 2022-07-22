import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./Map";

export default function User({ infoUser }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCDbWM9lMvBWodGFTkwO7g3Ku_szl1U9UA",
    });
    if (infoUser) {
        if (infoUser.success === false) {
            return <p>{infoUser.error.info}</p>;
        } else {
            if (!isLoaded) return <div>Loading...</div>;
            return <Map infoUser={infoUser} />;
        }
    }
}
