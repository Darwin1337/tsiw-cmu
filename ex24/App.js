import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, PermissionsAndroid } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [location, setLocation] = useState({
    latitude: 41.36638183986489,
    longitude: -8.739416072344056,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const getLastLocation = async () => {
    try {
      const locationRes = JSON.parse(await AsyncStorage.getItem('@lastLocation'));
      if (locationRes) {
        setLocation({
          latitude: locationRes.coords.latitude,
          longitude: locationRes.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        });
        console.log("Localização da AsyncStorage carregada com sucesso.");
      } else {
        throw new Error("A AsyncStorage não tem nenhuma localização guardada, a utilizar a localização fallback (ESMAD).");
      }
    } catch(e) {
      console.log(e.message + "Localização fallback (ESMAD) carregada com sucesso.");
    }
  };

  const getLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permissão obtida. A tentar obter localização.");
        
        Geolocation.getCurrentPosition(async (position) => {
          console.log("Localização obtida com sucesso, a aplicá-la ao mapa e a guardá-la na AsyncStorage para futuras utilizações.")
          await AsyncStorage.setItem('@lastLocation', JSON.stringify(position));
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          });
        }, (error) => {
          throw new Error(error.code + ": " + error.message);
        }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
      } else {
        throw new Error("Sem permissão para obter a localização.");
      }
    } catch (err) {
      console.log(err.message + "\nA utilizar a última localização da AsyncStorage.");
      getLastLocation();
    }
  }

  useEffect(() => {
    getLocationPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={ location }>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
          title="A sua localização"
        />
      </MapView>
    </SafeAreaView>
  );
}

export default App;