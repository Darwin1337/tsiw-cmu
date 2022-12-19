import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingTop: 16, marginHorizontal: 8 }}>
        <TextInput placeholder="Email" autoComplete="email" keyboardType="email-address" />
        <TextInput placeholder="Password" autoComplete="password" keyboardType="default" />
        <TouchableOpacity onPress={ () => navigation.navigate("Charging Stations") }>
          <View style={{ backgroundColor: "#F50057", paddingHorizontal: 32, paddingVertical: 8, borderRadius: 4 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default Login;