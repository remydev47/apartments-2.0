import { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";

export const MapMarker = ({lng, ltd, onPress, color} : {lng: number; ltd: number; onPress:() => void; color: string }) => {
    return(
        <Marker coordinate={{latitude: ltd, longitude: lng}} onPress={onPress}>
            <MaterialCommunityIcons name="map-marker" size={32} color={color} />
        </Marker>
    )
}