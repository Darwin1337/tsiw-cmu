import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Pressable, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';

const StyledText = styled(Text);
const StyledView = styled(View);

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StyledView className="flex-1 bg-[#FAF4F2]">
          <StyledView className="p-6 flex flex-row items-center justify-between">
            <StyledView className="flex flex-row items-center gap-3">
              <Image style={ styles.avatar__header } source={{ uri: "https://www.dicasdemulher.com.br/wp-content/uploads/2020/10/soft-girl-054.jpg" }} />
              <StyledText className="text-gray-500">Hi, Kiara!</StyledText>
            </StyledView>
            <TouchableOpacity>
              <Icon name="bell-alt" size={ 25 } color={ "#302820" } />
              <StyledView className="w-3 h-3 rounded-full bg-white absolute top-[-2] right-[-2]"></StyledView>
              <StyledView className="w-2 h-2 rounded-full bg-orange-500 absolute top-0 right-0"></StyledView>
            </TouchableOpacity>
          </StyledView>

          <StyledView className="p-6 pt-0">
            <StyledText className="text-2xl font-black text-black mb-2">Tasks for today</StyledText>
            <StyledView className="flex flex-row gap-2 items-center">
              <Icon name="star" size={ 15 } color={ "#F9C12E" } />
              <StyledText className="font-bold">5 available</StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="p-6 pt-2">
            <StyledView className="rounded-lg flex flex-row items-center bg-white">
              <TextInput style={ styles.input } placeholder="Search" />
              <Icon style={ styles.searchIcon } name="search" size={ 20 } color="#302820"/>
            </StyledView>
          </StyledView>

          <StyledView className="p-6 pt-2 mb-3">
            <StyledView className="flex flex-row justify-between items-center mb-2">
              <StyledText className="text-xl font-bold text-black">Last connections</StyledText>
              <TouchableOpacity>
                <StyledText className="font-slate-600">See all</StyledText>
              </TouchableOpacity>
            </StyledView>
    
            <StyledView className="flex flex-row justify-between">
              <Image style={ styles.avatars } source={{ uri: "https://blog.pajaris.com.br/wp-content/uploads/2020/06/e-girl.png" }} />
              <Image style={ styles.avatars } source={{ uri: "https://s2.glbimg.com/A0EI2j7gger_yHZZFauRnFyMauQ=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/3/S/dVmHInScaICVMCAAGjTQ/lucas.jpg" }} />
              <Image style={ styles.avatars } source={{ uri: "https://blog.pajaris.com.br/wp-content/uploads/2020/06/e-girl-1.jpg" }} />
              <Image style={ styles.avatars } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2pumjFUNHBn0NBRHcuOtB6AdmGaRelV2wkuk1ANOs5Afs2m6FQJ5BKUXeC88aFKZ7uA&usqp=CAU" }} />
              <StyledView className="w-[55] h-[55] bg-[#F2EDED] rounded-full flex items-center justify-center">
                <StyledText className="font-medium text-black">+5</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>

          <StyledView className="p-6 flex-1 bg-white rounded-tl-3xl rounded-tr-3xl shadow-gray-700">
            <StyledView className="flex flex-row justify-between items-center mb-3">
              <StyledText className="text-xl font-bold text-black">Active projects</StyledText>
              <TouchableOpacity>
                <StyledText className="font-slate-600">See all</StyledText>
              </TouchableOpacity>
            </StyledView>
            <StyledView className="flex gap-3">
              <StyledView style={{ borderWidth: 1, borderColor: "#ccc" }} className="p-4 card rounded-xl">
                <StyledView className="flex flex-row justify-between">
                  <StyledText className="text-gray-500 text-xs">Numero 10</StyledText>
                  <StyledText className="text-gray-500 text-xs">4h</StyledText>
                </StyledView>
                <StyledText className="text-black font-bold text-lg mb-3">Blog and social posts</StyledText>
                <StyledView className="flex flex-row items-center gap-2">
                  <IonIcon name="alert-circle-outline" size={ 20 } color="black"/>
                  <StyledText className="text-black text-sm">Deadline is today</StyledText>
                </StyledView>
              </StyledView>

              <StyledView style={{ borderWidth: 1, borderColor: "#ccc" }} className="p-4 card rounded-xl">
                <StyledView className="flex flex-row justify-between">
                  <StyledText className="text-gray-500 text-xs">Grace Aroma</StyledText>
                  <StyledText className="text-gray-500 text-xs">7d</StyledText>
                </StyledView>
                <StyledText className="text-black font-bold text-lg mb-3">New capmain review</StyledText>
                <StyledView className="flex flex-row items-center gap-2">
                  <IonIcon name="checkmark-circle-outline" size={ 20 } color="black"/>
                  <StyledText className="text-black text-sm">This event is yet to occur</StyledText>
                </StyledView>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar__header: {
    width: 40,
    height: 40,
    borderRadius: 75
  },
  avatars: {
    width: 55,
    height: 55,
    borderRadius: 75
  },
  searchIcon: {
    flex: 1,
    padding: 15
  },
  input: {
    flex: 10,
    height: 40,
    backgroundColor: '#fff',
    color: '#424242',
    paddingStart: 20
  }
});

export default Home;