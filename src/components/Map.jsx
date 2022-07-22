import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ infoUser }) => {
    //console.log("user", infoUser);

    //const center = { lat: infoUser.latitude, lng: infoUser.longitude };

    return !infoUser ? (
        <p>Waiting...</p>
    ) : (
        <>
            <GoogleMap
                zoom={15}
                center={{ lat: infoUser.latitude, lng: infoUser.longitude }}
                draggable={true}
            >
                <Marker
                    position={{
                        lat: infoUser.latitude,
                        lng: infoUser.longitude,
                    }}
                    text={infoUser.ip}
                />
            </GoogleMap>
        </>
    );
};

export { Map };
