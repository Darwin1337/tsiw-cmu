import { SafeAreaView, View, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

// https://reactnative.dev/docs/handling-touches#touchables

// TouchableHighlight - used anywhere you would use a button or link on web.
// The view's background will be darkened when the user presses down on the button.

// TouchableNativeFeedback - used on Android to display ink surface reaction
// ripples that respond to the user's touch.

// TouchableOpacity - can be used to provide feedback by reducing the opacity of
// the button, allowing the background to be seen through while the user is pressing down.

// TouchableWithoutFeedback - If you need to handle a tap gesture but you don't want any
// feedback to be displayed

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}>
      <Text style={{ paddingBottom: 25, fontSize: 20 }}>Touchable Components</Text>
      <TouchableHighlight onPress={ () => alert("Touchable Highlight") } style={{ marginBottom: 15 }}>
        <View style={{ alignItems: "center", backgroundColor: "lightgray", padding: 10, borderWidth: 1, borderColor: "black" }}>
          <Text>Touchable Highlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback onPress={ () => alert("Touchable Native Feedback") }>
        <View style={{ alignItems: "center", backgroundColor: "cyan", padding: 10, borderWidth: 1, borderColor: "black", marginBottom: 15 }}>
          <Text>Touchable Native Feedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity onPress={ () => alert("Touchable Opacity") } style={{ marginBottom: 15 }}>
        <View style={{ alignItems: "center", backgroundColor: "black", padding: 10, borderWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "white" }}>Touchable Opacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={ () => alert("Touchable Without Feedback") }>
        <View style={{ alignItems: "center", backgroundColor: "yellow", padding: 10, borderWidth: 1, borderColor: "black" }}>
          <Text>Touchable Without Feedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default App;