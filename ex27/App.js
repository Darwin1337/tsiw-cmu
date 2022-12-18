import { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import Splash from "./images/Splash";

// https://rapidapi.com/3b-data-3b-data-default/api/skyscanner44/

const API_KEY = "KEY_HERE";

const App = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({
    cities: {
      origin: {
        name: ""
      },
      destination: {
        name: ""
      }
    },
    date: new Date(),
    showPicker: false,
    loading: false
  });

  const getResults = async () => {
    if (!info.cities.origin.name)
      return alert("Invalid origin");
    if (!info.cities.destination.name || info.cities.origin.name == info.cities.destination.name)
      return alert("Invalid destination");

    try {
      setInfo(curInfo => ({ ...curInfo, loading: true }));
      const codes = {};

      await Promise.all(Object.keys(info.cities).map(async (cityType) => {
        const req = await fetch("https://skyscanner44.p.rapidapi.com/autocomplete?query=" + info.cities[cityType].name, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com"
          }
        });
        
        const res = await req.json();
        
        if (!Array.isArray(res) || res.length == 0)
          throw new Error("Couldn't find any airports with the given " + cityType);

        // TODO It's probably best to check if the iata_code's are not the same on both the destination and origin
        codes[cityType] = res[0].iata_code;
      }));
      
      // Wait for all requests to be finished
      console.log("Successfully got codes: " + JSON.stringify(codes));

      // Clear the array so it doesn't save previous searches
      setResults([]);

      const req = await fetch(`https://skyscanner44.p.rapidapi.com/search-extended?adults=1&origin=${ codes.origin }&destination=${ codes.destination }&departureDate=${ info.date.toISOString().substring(0, 10) }&currency=EUR&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com"
        }
      });

      const res = await req.json();

      for (let i = 0; i < (res?.itineraries?.results.length > 5 ? 5 : res?.itineraries?.results.length); i++) {
        setResults(curResults => [...curResults, {
          id: res?.itineraries?.results[i]?.id ?? "Not available",
          nonstop: res?.itineraries?.results[i]?.legs.length > 1 ? false : true,
          carrier: res?.itineraries?.results[i]?.legs[0]?.carriers?.marketing[0]?.name ?? "Not available",
          price: res?.itineraries?.results[i]?.pricing_options[0]?.price?.amount ?? "Not available"
        }]);
      }
      setInfo(curInfo => ({ ...curInfo, loading: false }));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: "100%", maxHeight: 250 }}>
          <Splash/>
        </View>
        <View style={{ marginTop: 24 }}>
          <TextInput
            style={ styles.input }
            onChangeText={ (newText) => setInfo(prevInfo => ({ ...prevInfo, cities: { ...prevInfo.cities, origin: { ...prevInfo.cities.origin, name: newText }}})) }
            value={ info.cities.origin.name }
            placeholder="Origin"
          />
        </View>
        <View>
          <TextInput
            style={ styles.input }
            onChangeText={ (newText) => setInfo(prevInfo => ({ ...prevInfo, cities: { ...prevInfo.cities, destination: { ...prevInfo.cities.destination, name: newText }}})) }
            value={ info.cities.destination.name }
            placeholder="Destination"
          />
        </View>
        <View>
          <TouchableWithoutFeedback onPress={ () => setInfo(curInfo => ({ ...curInfo, showPicker: true })) }>
            <View style={[ styles.input, { justifyContent: "center" } ]}>
              <Text>Depart: { info.date.toDateString() }</Text>
            </View>
          </TouchableWithoutFeedback>
          { info.showPicker &&
            <DateTimePicker
              display="spinner"
              mode="date"
              minimumDate={ new Date() }
              value={ info.date }
              onChange={ (e, selectedDate) => setInfo(curInfo => ({ ...curInfo, date: selectedDate, showPicker: false })) }
            />
          }
        </View>
        <View>
          <TouchableOpacity
            onPress={ getResults }>
            <View style={{ justifyContent: "center", alignItems: "center", height: 40, borderWidth: 1, borderRadius: 4, borderColor: "transparent", backgroundColor: "#0EBDA6", marginHorizontal: 16, marginVertical: 4 }}>
              <Text style={{ color: "white", fontSize: 18 }}>Search flights</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 16, flex: 1 }}>
          <Text style={{ color: "black", marginBottom: 8 }}>{ results.length } Result(s)</Text>
          { !info.loading ?
            <ScrollView>
              {
                results.length > 0 &&
                results.map((result, index) => 
                  <View key={ index }>
                    <View style={{ borderWidth: 0.5, borderColor: "black", marginVertical: 10 }} />
                    <View>
                      <Text><Text style={{ fontWeight: "bold", color: "black" }}>ID: </Text>{ result.id }</Text>
                      <Text><Text style={{ fontWeight: "bold", color: "black" }}>Minimum price: </Text>{ result.price }€</Text>
                      <Text><Text style={{ fontWeight: "bold", color: "black" }}>Nonstop flight: </Text>{ result.nonstop ? "Yes" : "No" }</Text>
                      <Text><Text style={{ fontWeight: "bold", color: "black" }}>Carrier: </Text>{ result.carrier }</Text>
                    </View>
                  </View>
              )}
            </ScrollView> : <Text>Loading...</Text>
          }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 16,
    marginVertical: 4,
    paddingStart: 8
  }
});

export default App;