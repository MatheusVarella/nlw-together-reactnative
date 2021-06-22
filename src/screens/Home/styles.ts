import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper"; // Biblioteca para auxiliar no layout para Iphone

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26, // Vai somar o tamanha do barra do topo da tela mais 26
    marginBottom: 42,
  },
});