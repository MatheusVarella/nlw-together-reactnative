import React, { ReactNode } from "react";
import { 
  View, 
  Modal, 
  ModalProps, 
  TouchableWithoutFeedback // identifica o toque do usuário em qualquer lugar da tela sem resposta visual
} from "react-native";
import { styles } from "./styles";
import { Background } from "../Background";

interface Props extends ModalProps{
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ 
  children, 
  closeModal,
  ...rest 
} : Props){
  return(
    <Modal
      transparent
      animationType="slide" // o tipo da animação
      statusBarTranslucent // altera a barrinha de cima do celular
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              { children }
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}