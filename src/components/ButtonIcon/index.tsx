import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"; // botão com melhor experiencia do usuário
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import DiscordImg from "../../assets/discord.png";

interface Props extends RectButtonProps{
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
  return(
    <RectButton 
    style={styles.container} 
    {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}