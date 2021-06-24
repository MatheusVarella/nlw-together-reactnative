import React, { ReactNode } from "react";
import { View, Modal, ModalProps } from "react-native";
import { styles } from "./styles";
import { Background } from "../Background";

interface Props extends ModalProps{
  children: ReactNode;
}

export function ModalView({ children, ...rest } : Props){
  return(
    <Modal
      transparent
      animationType="slide" // o tipo da animação
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            { children }
          </Background>
        </View>
      </View>
    </Modal>
  );
}