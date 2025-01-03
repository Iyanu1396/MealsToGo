import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Restuarants from "@/src/features/restaurants/screens/Restuarants";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/src/infrastructure/theme";

import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {useFonts as useLato , Lato_400Regular } from '@expo-google-fonts/lato'

export default function Page() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }


  return (
    <ThemeProvider theme={theme}>
      <Restuarants />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
