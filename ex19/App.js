import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Pressable, Text, View, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./components/Main";
import LogoSVG from './images/logo.svg';
import StarSVG from './images/star.svg';

const StyledText = styled(Text);
const StyledView = styled(View);

const Stack = createStackNavigator();

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView className="flex-1 bg-[#D1EDBF]">
        <StyledView className="px-5 flex flex-row items-center content-end">
          <LogoSVG width={ 40 } height={ 40 } />
          <StyledText className="p-5 text-2xl font-bold text-black ml-[-20]">Dayzer!</StyledText>
        </StyledView>
        <StyledText className="p-5 text-4xl font-black text-black text-center">To simplify{"\n"}the way you{"\n"}work</StyledText>
        <StyledView className="flex-1 items-center">
          <StarSVG width={ 40 } height={ 40 } style={{ position: 'absolute', left: "50%", top: 0, zIndex: 1 }} />
          <StarSVG width={ 40 } height={ 40 } style={{ position: 'absolute', right: 10, top: "-60%", zIndex: 1 }} />
          <Image source={require("./images/middle.png")} />
        </StyledView>
        <StyledView className="mx-auto">
          <StyledText className="text-black text-lg text-justify">
            Controling deliveries in{"\n"}reliable and no-hassle way.
          </StyledText>
        </StyledView>
        <StyledView className="m-5">
          <TouchableOpacity onPress={ () => navigation.navigate("Main") } className="bg-[#24282C] rounded-lg px-3 py-4">
            <StyledText className="text-center text-lg font-bold text-white">Get free trial</StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={ Onboarding } />
        <Stack.Screen name="Main" component={ Main } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;