import { SafeAreaView, View, Text } from 'react-native';
import { styled } from 'nativewind';
import EmptySVG from '../images/empty.svg';

const StyledView = styled(View);
const StyledText = styled(Text);

const Storage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView className="pt-5 bg-slate-100">
        <StyledText className="text-xl font-bold text-black text-center">Storage</StyledText>
      </StyledView>
      <StyledView className="flex-1 bg-slate-100 items-center justify-center">
        <EmptySVG />
        <StyledView className="pt-10">
          <StyledText className="text-xl font-bold text-black text-center">Sorry</StyledText>
          <StyledText className="text-lg font-medium text-black text-center">this page hasn't been designed yet</StyledText>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default Storage;