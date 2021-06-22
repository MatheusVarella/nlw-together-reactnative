import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface Props {
  children: ReactNode; // Elemento filho do React
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors; // Para deixar o código menor e mais legivel 

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>        
  );
}