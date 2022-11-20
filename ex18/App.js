import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImageBackground = styled(ImageBackground);

const App = () => {
  return (
    <>
      <ScrollView>
        <StyledView className="h-[400]">
          <StyledImageBackground
            className="flex-1" 
            source={{ uri: "http://quintavilamaior.com/wp-content/uploads/2019/06/frente-vila.jpg" }}
            resizeMode="cover">
          </StyledImageBackground>
        </StyledView>

        <StyledText className="text-black text-2xl text-center font-bold pt-5">Quinta de Vila Maior</StyledText>
        
        <StyledView className="p-4">
          <StyledText className="text-md text-black font-bold mb-2">Bem-vindo</StyledText>
          <StyledView className="flex-1 flex-row gap-3 mb-4">
            <Image style={{ flex: 2 }} resizeMode="cover" source={{ uri: "http://quintavilamaior.com/wp-content/uploads/2019/06/fundador_quinta_vila_maior.png" }} />
            <StyledText className="text-black text-justify text-wrap" style={{ flex: 3 }}>
              É na Região do Douro Superior, no berço dos mais conhecidos vinhos do mundo, que se situa a Quinta de Vila Maior, com uma área de 75 hectares. Sendo 35 hectares de vinha, 30 hectares de Olival e nos restantes estão a Adega com lagares de granito anexos, armazéns de cascos e ainda outras dependências como o escritório, laboratório de análises, pomares e outras zonas de lazer.
            </StyledText>
          </StyledView>

          <StyledText className="text-right text-md text-black font-bold mb-2">História</StyledText>
          <StyledView className="flex-1 flex-row gap-3 mb-4">
            <StyledText style={{ flex: 3 }} className="text-black text-justify">
              Em 1889, Manuel Joaquim Pinto, estabelecido em Vila Nova de Gaia com armazéns de vinho do Porto, adquire várias propriedades e vinhas no Douro Superior.
            </StyledText>
            <Image style={{ flex: 2 }} resizeMode="cover" source={{ uri: "http://quintavilamaior.com/wp-content/uploads/2019/06/barco_rabelo_rio_douro-150x150.png" }} />
          </StyledView>

          <StyledText className="text-black text-justify">
            Em 1898 fixa atividade na Foz do Sabor para preparação e transporte de vinhos.Mais tarde, em 1932, faz parte do grupo de fundadores da Casa do Douro.
            Foram tempos de glória em que nos armazéns e lagares de granito da Casa da Palmeira se preparava, tratava e carregavam centenas de pipas de vinho em barcos rabelos próprios, com destino aos armazéns de Vila Nova de Gaia.
            Hoje na sua quarta geração, a Quinta de Vila Maior continua com a mesma paixão pela terra e produção de vinhos continuando assim o trabalho de gerações.
          </StyledText>
        </StyledView>

        <StyledText className="text-black text-2xl text-center font-bold">Contactos</StyledText>

        <StyledView className="p-4">
          <StyledView className="flex-1 w-full items-center bg-slate-200 p-5 rounded-lg mb-4">
            <Icon name="location" size={ 30 } color="#FF6600" />
            <StyledText className="text-center mt-4 font-bold">
              Foz do Sabor 5160-035 Cabeça Boa{"\n"}
              Torre de Moncorvo Portugal
            </StyledText>
          </StyledView>

          <StyledView className="flex-1 w-full items-center bg-slate-200 p-5 rounded-lg mb-4">
            <Icon name="globe" size={ 30 } color="#FF6600" />
            <StyledText className="text-center mt-4 font-bold">
              Quinta de Vila Maior (escritório)
            </StyledText>
            <StyledText className="text-center">
              41°11’39.6″N 7°06’46.0″W
            </StyledText>
            <StyledText className="text-center mt-4 font-bold">
              Casa da Palmeira (loja)
            </StyledText>
            <StyledText className="text-center">
              41°10’45.9″N 7°06’42.4″W
            </StyledText>
          </StyledView>

          <StyledView className="flex-1 w-full items-center bg-slate-200 p-5 rounded-lg">
            <Icon name="call" size={ 30 } color="#FF6600" />
            <StyledText className="text-center mt-4 font-bold">
              Quinta de Vila Maior (escritório)
            </StyledText>
            <StyledText className="text-center">
              +351 279 979 153{"\n"}
              +351 911 941 393 | +351 918 624 659
            </StyledText>
            <StyledText className="text-center mt-4 font-bold">
              Casa da Palmeira (loja)
            </StyledText>
            <StyledText className="text-center">
              +351 279 033 159
            </StyledText>
          </StyledView>
        </StyledView>

        <StyledText className="text-black text-2xl text-center font-bold">Horários</StyledText>

        <StyledView className="p-4">
          <StyledView className="flex-1 w-full items-center bg-slate-200 p-5 rounded-lg">
            <Icon name="time" size={ 30 } color="#FF6600" />
            <StyledText className="text-center mt-4 font-bold">
              Quinta de Vila Maior (escritório)
            </StyledText>
            <StyledText className="text-center">
              +351 279 979 153{"\n"}
              +351 911 941 393 | +351 918 624 659
            </StyledText>
            <StyledText className="text-center mt-4 font-bold">
              Casa da Palmeira (loja)
            </StyledText>
            <StyledText className="text-center">
              +351 279 033 159
            </StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </>
  )
};


export default App;