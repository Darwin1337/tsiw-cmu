import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Pressable, Text, View, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledIcon = styled(Icon);

const Overview = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D1EDBF" }}>
      <ScrollView>
        <StyledView className="p-6 pb-4 flex">
          <StyledView className="flex flex-row justify-between">
            <TouchableOpacity>
              <StyledView className="w-10 h-10 rounded-full" style={{ borderWidth: 1, borderColor: "#B7D8A4" }}></StyledView>
              <StyledIcon className="absolute top-[4] left-[4]" name="close-outline" size={ 30 } color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledIcon name="ellipsis-horizontal" size={ 30 } color="black" />
            </TouchableOpacity>
          </StyledView>
          <StyledView className="flex items-center mt-4">
            <StyledView className="w-20 h-1 bg-[#B7D8A4] rounded-full"></StyledView>
          </StyledView> 
        </StyledView>

        <StyledView className="p-6 pt-10 flex-1 bg-white shadow-xl" style={{ borderTopRightRadius: 45, borderTopLeftRadius: 45 }}>
          <StyledText className="text-2xl font-black text-black mb-2">Messaging ID</StyledText>
          <StyledView className="pt-4">
            <StyledView className="flex flex-row justify-between items-center">
              <StyledText className="text-lg font-bold text-black mb-2">Your daily plan</StyledText>
              <StyledText className="text-sm font-bold text-black mb-2">70%</StyledText>
            </StyledView>
            <StyledView>
              <StyledView className="w-full h-[5] bg-[#F1ECEE] rounded-full"></StyledView>
              <StyledView className="w-[70%] h-[5] bg-black rounded-full absolute top-0 left-0"></StyledView>
            </StyledView>
            <StyledView className="pt-3">
              <StyledText className="text-xs text-gray-500">4 out of 6 completed</StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="flex flex-row gap-3 mt-4">
            <StyledView className="p-3 flex-1 bg-[#D1EDBF] rounded-xl">
              <StyledText className="text-2xl font-bold text-black">17</StyledText>
              <StyledView className="flex flex-row items-center gap-1 mt-1">
                <StyledIcon name="checkmark-circle" size={ 15 } color="black" />
                <StyledText className="text-sm text-gray-600">Tasks finished</StyledText>
              </StyledView>
            </StyledView>
            <StyledView className="p-3 flex-1 bg-[#D1EDBF] rounded-xl">
              <StyledText className="text-2xl font-bold text-black">3,2</StyledText>
              <StyledView className="flex flex-row items-center gap-1 mt-1">
                <StyledIcon name="time" size={ 15 } color="black" />
                <StyledText className="text-sm text-gray-600">Tracked hours</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>

          <StyledView className="mt-6">
            <StyledText className="text-lg font-bold text-black mb-2">Overview</StyledText>
            <StyledText className="text-sm text-gray-600 text-wrap">Messaging ID framework development for the marketing branch and the publicity bureau and implemented a draft on the framework.</StyledText>
          </StyledView>
          
          <StyledView className="mt-6">
            <StyledText className="text-lg font-bold text-black mb-3">Members connected</StyledText>
            <StyledView className="flex flex-row gap-4">
              <Image style={ styles.avatars } source={{ uri: "https://blog.pajaris.com.br/wp-content/uploads/2020/06/e-girl.png" }} />
              <Image style={ styles.avatars } source={{ uri: "https://s2.glbimg.com/A0EI2j7gger_yHZZFauRnFyMauQ=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/3/S/dVmHInScaICVMCAAGjTQ/lucas.jpg" }} />
              <Image style={ styles.avatars } source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2pumjFUNHBn0NBRHcuOtB6AdmGaRelV2wkuk1ANOs5Afs2m6FQJ5BKUXeC88aFKZ7uA&usqp=CAU" }} />
              <StyledView className="w-[55] h-[55] bg-[#F2EDED] rounded-full flex items-center justify-center">
                <StyledText className="font-medium text-black text">
                  <StyledIcon name="add-outline" size={ 30 } color="black" />
                </StyledText>
              </StyledView>
            </StyledView>
          </StyledView>

          <StyledView className="mt-6">
            <StyledText className="text-lg font-bold text-black mb-2">Lorem</StyledText>
            <StyledText className="text-sm text-gray-600 text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatars: {
    width: 55,
    height: 55,
    borderRadius: 75
  }
});

export default Overview;