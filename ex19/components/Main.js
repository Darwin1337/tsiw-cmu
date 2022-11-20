import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';

// Screens
import Home from "./Home";
import Overview from "./Overview";
import Storage from "./Storage";
import Events from "./Events";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName={ "Home" }
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Overview") {
            iconName = "apps";
          } else if (route.name === "Storage") {
            iconName = "folder";
          } else if (route.name === "Events") {
            iconName = "calendar";
          }
          
          return (
            <TouchableOpacity onPress={() => navigation.navigate(route.name)}>
              <Icon name={ iconName } size={ 20 } color={ color } />
            </TouchableOpacity>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#302820",
        tabBarInactiveTintColor: "#C5C3C1",
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 11
        },
        tabBarStyle: {
          display: "flex",
          height: 80
        }
      })}>
      <Tab.Screen name={ "Home" } component={ Home } />
      <Tab.Screen name={ "Storage" } component={ Storage } />
      <Tab.Screen name={ "Overview" } component={ Overview } />
      <Tab.Screen name={ "Events" } component={ Events } />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
});

export default Main;