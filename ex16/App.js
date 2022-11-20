import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import FontAwesome5Icon from './components/FontAwesome5Icon';
import Navbar from "./components/Navbar";
import { default as theme } from './custom-theme.json';

const Header = () => (
  <View style={{ backgroundColor: "#222B45", padding: 20 }}>
    <Text style={{ fontSize: 18, fontStyle: "bold", textAlign: 'center' }}>Flashscore</Text>
  </View>
);

const App = () => (
  <>
    <IconRegistry icons={ FontAwesome5Icon } />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <NavigationContainer>
        <Header />
        <Navbar />
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

export default App;