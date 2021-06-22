import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"; // botão com melhor experiencia do usuário
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

interface Props {
  categorySelected: string;
}

export function CategorySelect({ categorySelected }: Props){
  return(
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false} // para não aparecer a barra de rolagem
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
          />
        ))
      }
    </ScrollView>
  );
}