import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://clipartsworld.com/images/discord-icon-png-1.png';
  return(
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}