import { useState } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, TextInput, TextComponent } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const fontSizes = [8, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 42, 48, 64, 72];
const colors = ["black", "blue ", "green", "red", "orange", "violet", "indigo", "yellow", "brown", "pink", "white"];

const App = () => {
  const [text, setText] = useState({ text: "", color: "black", fontSize: 16 });
  const [textList, setTextList] = useState([]);

  const AddToList = () => {
    setTextList(prevList => text.text.trim() ? [...prevList, text] : prevList);
    setText({ text: "", color: "black", fontSize: 16 });
  };
  
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Text</Text>
        <TextInput
          style={styles.input}
          value={text.text}
          onChangeText={ text => setText(prevText => ({ ...prevText, text: text })) }
        />
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Color</Text>
        <SelectDropdown
          buttonStyle={{ width: '100%' }}
          renderDropdownIcon={ () => <Text>▼</Text>}
          data={ colors }
          defaultValue={ text.color }
          onSelect={ selectedItem => setText(prevText => ({ ...prevText, color: selectedItem })) }
          buttonTextAfterSelection={ selectedItem => selectedItem }
          rowTextForSelection={ item =>  item }
        />
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Font size</Text>
        <SelectDropdown
          buttonStyle={{ width: '100%' }}
          renderDropdownIcon={ () => <Text>▼</Text>}
          data={ fontSizes }
          defaultValue={ text.fontSize }
          onSelect={ selectedItem => setText(prevText => ({ ...prevText, fontSize: selectedItem })) }
          buttonTextAfterSelection={ selectedItem => selectedItem }
          rowTextForSelection={ item =>  item }
        />
      </View>

      <View style={{ padding: 20 }}>
        <Button title="Add to list" accessibilityLabel="Add text to list" onPress={ AddToList }/>
      </View>
      
      <ScrollView style={{ padding: 20 }}>
        <Text>Text list</Text>
        { textList.map((text, index) => {
          return (
            <View key={ index }>
              <Text style={{ fontSize: text.fontSize, color: text.color }}>{ text.text }</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1
  },
});

export default App;