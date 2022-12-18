import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from "react-native";
import { styled } from "nativewind";
import io from 'socket.io-client';

const socket = io.connect("http://192.168.1.64:3000/");

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSAV = styled(SafeAreaView);
const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const logout = navigation.addListener('focus', () => {
      socket.emit('LogoutUser');
    });

    return logout;
  }, [navigation]);

  const handleLogin = (nav) => {
    if (user.trim()) {
      nav.navigate("Chat", { nickname: user });
      socket.emit('LogUser', user);
    } else {
      alert("Invalid nickname");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView className="p-5 flex-1 justify-center items-center gap-5">
        <TextInput
          style={ styles.login__inpt }
          onChangeText={ txt => setUser(txt) }
          value={ user }
          placeholder="Nickname"
        />

        <TouchableOpacity style={ styles.login__btn } onPress={ () => handleLogin(navigation) }>
          <StyledText className="text-black font-lg font-bold">Login</StyledText>
        </TouchableOpacity>
      </StyledView>
    </SafeAreaView>
  );
}

const Chat = ({ route }) => {
  const { nickname } = route.params;
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageList, setMessageList] = useState([]);
  const [msg, setMsg] = useState("");
  const scrollViewRef = useRef();

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    
    socket.on('RenderPreviousMessages', (messages) => {
      setMessageList(messages);
    });

    socket.on('chat message', (message) => {
      setMessageList(cur => [...cur, message]);
    });

    socket.on("error", (error) => {
      alert(error);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('RenderPreviousMessages');
      socket.off('chat message');
      socket.off('error');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('chat message', { socket__id: socket.id, nickname: nickname, message: msg, date: new Date() } );
    setMsg("");
  }

  return (
    <>
      { isConnected ? (
        <StyledSAV className="flex-1 bg-white justify-between">
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 5, marginLeft: -5, marginTop: -5 }} ref={ scrollViewRef } onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            { messageList.length > 0 ? messageList.map((msg, idx) => {
              return (
                <StyledView key={ idx } style={{ marginLeft: 5, marginTop: 5 }}>
                  <StyledText className="text-xs text-gray-500" style={ msg.socket__id == socket.id ? styles.author__sent : styles.author__received }>{ msg.nickname }</StyledText>
                  <StyledView  className="p-4 rounded-lg" style={ msg.socket__id == socket.id ? styles.sent : styles.received }>
                    <StyledText style={ msg.socket__id == socket.id ? styles.text__sent : styles.text__received }>{ msg.message }</StyledText>
                    <StyledText className="text-slate-400" style={{ fontSize: 10 }}>{ new Date(msg.date).toLocaleDateString("en-US", { year: "2-digit", month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) }</StyledText>
                  </StyledView>
                </StyledView>
              );
            }) : <Text>No messages</Text> }
          </ScrollView>

          <StyledView className="rounded-lg flex-row items-center bg-[#F9F9F9]">
            <TextInput style={ styles.message__inpt } placeholder="Message" value={ msg } onChangeText={ newMsg => setMsg(newMsg) }/>
            <TouchableOpacity
              style={{ backgroundColor: "#ccc", flex: 2, height: 40, alignItems: "center", justifyContent: "center" }}
              onPress={ sendMessage }>
            <StyledText className="text-black text-xs">Send</StyledText>
            </TouchableOpacity>
          </StyledView>
        </StyledSAV>
      ) : (
        <StyledSAV className="flex-1 bg-slate-200 justify-center">
          <StyledText className="text-black text-xl font-bold text-center">Could not connect to server</StyledText>
        </StyledSAV>
      ) }
    </>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Chat" component={ Chat } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  login__inpt: {
    height: 40,
    borderWidth: 1,
    width: "100%",
    borderRadius: 5
  },
  message__inpt: {
    flex: 10,
    height: 40,
    backgroundColor: '#F9F9F9',
    color: '#424242',
  },
  login__btn: {
    width: "100%",
    backgroundColor: "#ccc",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  sent: {
    backgroundColor: "#F9F9F9",
    maxWidth: '75%',
    alignSelf: 'flex-end'
  },
  received: {
    backgroundColor: "#2B3FEC",
    maxWidth: '75%',
    alignSelf: 'flex-start'
  },
  text__sent: {
    color: "black"
  },
  text__received: {
    color: "white"
  },
  author__sent:  {
    alignSelf: 'flex-end'
  },
  author__received:  {
    alignSelf: 'flex-start'
  }
});

export default App;