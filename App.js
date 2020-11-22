import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
