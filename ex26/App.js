import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./screens/Welcome";
import Menu from "./screens/Menu";
import Confirmation from "./screens/Confirmation";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={ Welcome } />
          <Stack.Screen name="Menu" component={ Menu } />
          <Stack.Screen name="Confirmation" component={ Confirmation } />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;