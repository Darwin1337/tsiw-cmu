import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Avatar } from '@rneui/themed';

const Menu = ({ navigation }) => {
  const [menu, setMenu] = useState([{
    name: "Cheeseburger",
    price: 4.99,
    quantity: 0,
    image: require("../images/cheeseburger.jpg")
  }, {
    name: "Pizza",
    price: 10.99,
    quantity: 0,
    image: require("../images/pizza.jpg")
  }]);

  return (
    <SafeAreaView>
      {
        menu.map((item, index) => (
          <ListItem key={ index } bottomDivider>
            <Avatar source={ item.image } />
            <ListItem.Content>
              <ListItem.Title>{ item.name }</ListItem.Title>
              <ListItem.Subtitle style={{ color: "gray" }}>{ item.price }</ListItem.Subtitle>
              <ListItem.Subtitle style={{ color: "gray" }}>Quantity: { item.quantity }</ListItem.Subtitle>
              <TouchableOpacity
                style={ styles.red__btn }
                onPress={ () => setMenu(curMenu => curMenu.map(food => food.name === item.name ? { ...food, quantity: food.quantity += 1 } : food)) }>
                <Text style={{ color: "white" }}>Add</Text>
              </TouchableOpacity>
              { item.quantity > 0 &&
                <TouchableOpacity
                  style={ styles.red__btn }
                  onPress={ () => setMenu(curMenu => curMenu.map(food => food.name === item.name ? { ...food, quantity: food.quantity -= 1 } : food)) }>
                  <Text style={{ color: "white" }}>Remove</Text>
                </TouchableOpacity>
              }
            </ListItem.Content>
          </ListItem>
        ))
      }
      <TouchableOpacity
        style={[ styles.red__btn, { alignSelf: "center", marginTop: 32 } ]}
        onPress={ () => navigation.navigate("Confirmation", { order: menu }) }>
        <Text style={{ color: "white" }}>Finish order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  red__btn: {
    backgroundColor: "#F50057",
    marginTop: 8,
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 4
  }
});

export default Menu;