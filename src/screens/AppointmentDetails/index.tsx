import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { 
  View, 
  ImageBackground, 
  Text,
  FlatList  
} from "react-native";

import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";

import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Matheus',
      avatar_url: 'https://github.com/MatheusVarella.png',
      status: 'Online'
    },
    {
      id: '2',
      username: 'Matheus',
      avatar_url: 'https://github.com/MatheusVarella.png',
      status: 'Ocupado'
    }
  ]
  
  return (
    <Background>
     <Header 
      title="Detalhes"
      action={
        <BorderlessButton>
          <Fontisto
            name="share"
            size={24}
            color={theme.colors.primary}
          />
        </BorderlessButton>
      }
     />
     <ImageBackground
      source={BannerImg}
      style={styles.banner}
      >
       <View style={styles.bannerContent}>    
        <Text style={styles.title}>
          Lendários
        </Text>
        <Text style={styles.subtitle}>
          É hoje que vamos chegar ao challenger sem perder uma partida de md10
        </Text>
       </View>
     </ImageBackground>

     <ListHeader 
      title="Jogadores"
      subtitle="Total 3"
     />

    <FlatList
      data= {members}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Member data={item} />
      )}
      ItemSeparatorComponent={() => <ListDivider isCentered />}
      style={styles.members}
    >
    </FlatList>
    <View style={styles.footer}>
      <ButtonIcon title="Entrar na partida" />
    </View>
    </Background>        
  );
}