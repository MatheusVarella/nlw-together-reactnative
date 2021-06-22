import React from "react";
import { useFonts } from "@expo-google-fonts/inter";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold} from "@expo-google-fonts/rajdhani";

import { SignIn } from "./src/screens/SignIn";

export default function App() {
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  return(
    <SignIn />
  );
}