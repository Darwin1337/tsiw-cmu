import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import stations from "../assets/famel.json";

const ChargingStations = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {
          stations.map((station, index) => (
            <Card key={ index }>
              <Card.Title>{ station.name }</Card.Title>
              <Card.Divider />
              <Image style={{ height: 150 }} source={{ uri: station.image }}/>
              <TouchableOpacity onPress={ () => navigation.navigate("Map", { coords: { ...station.coordinates } })}>
                <View style={{ backgroundColor: "#F50057", paddingHorizontal: 32, paddingVertical: 8, borderRadius: 4, marginTop: 16 }}>
                  <Text style={{ color: "white", textAlign: "center" }}>View Location</Text>
                </View>
              </TouchableOpacity>
            </Card>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
};

export default ChargingStations;