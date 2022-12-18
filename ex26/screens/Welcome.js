import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashSVG from "../images/Splash";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ marginTop: 32 }}>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 40, alignSelf: "center" }}>KIM FAST FOOD</Text>
      </View>
      <View style={{ backgroundColor: "white", width: "100%", height: 250 }}>
        <SplashSVG />
      </View>
      <View style={{ marginBottom: 32 }}>
        <TouchableOpacity
          style={{ backgroundColor: "#F50057", paddingHorizontal: 32, paddingVertical: 8, borderRadius: 4, alignSelf: "center" }}
          onPress={ () => navigation.navigate("Menu") }>
          <Text style={{ color: "white" }}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;