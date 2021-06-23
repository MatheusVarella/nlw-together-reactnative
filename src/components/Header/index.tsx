import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler"; // botão indicado para quando não tem texto no botão
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { View, Text } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";

interface Props {
  title: string;
  action?: ReactNode; // ReactNode é para passar de forma dinamica o que vai ser chamado
}

export function Header({ title, action}: Props ) {
  const { secondary40, secondary100, heading } = theme.colors;
  
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack(); // função para voltar a tela anterior
  }

  return (
    <LinearGradient
      style={styles.container} 
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}> 
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>

      {
        action && 
        <View>
          { action }
        </View>
      }
    </LinearGradient>        
  );
}