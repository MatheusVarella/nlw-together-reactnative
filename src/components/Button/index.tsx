import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"; // botão com melhor experiencia do usuário
import { Text} from "react-native";
import { styles } from "./styles";

interface Props extends RectButtonProps{
  title: string;
}

export function Button({ title, ...rest } : Props){
  return(
    <RectButton 
    style={styles.container} 
    {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}