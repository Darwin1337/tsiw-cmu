import { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { accelerometer } from "react-native-sensors";

const App = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0, timestamp: "0" });

  accelerometer.subscribe(({ x, y, z, timestamp }) =>
    setData({ x, y, z, timestamp })
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>X: { data.x }</Text>
        <Text>Y: { data.y }</Text>
        <Text>Z: { data.z }</Text>
        <Text>Timestamp: { data.timestamp }</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;