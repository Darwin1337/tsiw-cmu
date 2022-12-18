import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Confirmation = ({ route, navigation }) => {
  const { order } = route.params;

  return (
    <SafeAreaView style={{ marginTop: 16 }}>
      {
        order.map((item, index) => 
        item.quantity > 0 && <View key={ index } style={{ paddingStart: 16 }}>
          <Text style={{ color: "black" }}>Name: { item.name }, Quantity: { item.quantity }</Text>
        </View>
      )}
      <View style={{ paddingStart: 16, paddingTop: 16 }}>
        <Text style={{ color: "black", fontWeight: "bold" }}>Total is: { parseFloat(order.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2) }€</Text>
      </View>
      <TouchableOpacity
          style={{ backgroundColor: "#F50057", marginTop: 32, paddingHorizontal: 32, paddingVertical: 8, borderRadius: 4, alignSelf: "center" }}
          onPress={ () => navigation.goBack() }>
          <Text style={{ color: "white" }}>Go back to the menu</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Confirmation;