import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ route }) => {
  const { coords } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={ coords }>
        <Marker
          coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude
          }}
          title="Station location"
        />
      </MapView>
    </SafeAreaView>
  )
};

export default Map;