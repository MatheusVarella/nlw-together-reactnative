import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"; // botão com melhor experiencia do usuário
import { ScrollView } from "react-native";

import { styles } from "./styles";

export function CategorySelect(){
  return(
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false} // para não aparecer a barra de rolagem
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        
      }
    </ScrollView>
  );
}