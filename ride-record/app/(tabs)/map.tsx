import { View, StyleSheet } from "react-native";
// Remove next/dynamic and import react-leaflet components directly for web usage
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { JSX } from "react";

interface Props {
    location: [number, number];
}

export default function Map({ location }: Props): JSX.Element {
    return (
        <MapContainer center={location} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>
                    A Pretty CSS3 Popup. <br /> Easily Customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

// const Map = () => {
//     const initialRegion = [ 37.78825, -122.4324 ];

//     const routeCoordinates = [
//       { latitude: 37.78825, longitude: -122.4324 },
//       { latitude: 37.79825, longitude: -122.4524 },
//       { latitude: 37.80825, longitude: -122.4624 },
//     ];

//     return (
//         <View style={styles.container}>
//             <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />  
//                 <Marker position={[37.78825, -122.4324]}>
//                     <Popup>
//                         A Pretty CSS3 Popup. <br /> Easily Customizable.
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//     },
//     map: {
//         flex: 1,
//     },
//     text: {
//         position: 'absolute'
//     }
// });

// export default Map;