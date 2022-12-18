import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// UI Kitten
import { ApplicationProvider, IconRegistry, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import FontAwesome5Icon from './components/FontAwesome5Icon';
import { default as theme } from './custom-theme.json';

// Components
import Navbar from "./components/Navbar";
import Details from "./components/Details";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <>
      <View style={{ backgroundColor: "#222B45", padding: 20 }}>
        <Text style={{ fontSize: 18, fontStyle: "bold", textAlign: 'center' }}>Flashscore</Text>
      </View>
      <Navbar />
    </>
  );
}

const App = () => (
  <>
    <IconRegistry icons={ FontAwesome5Icon } />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={ Main } options={{ headerShown: false }}/>
          <Stack.Screen name="Details" component={ Details } />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

export default App;