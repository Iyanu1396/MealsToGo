import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Restuarants from "@/src/features/restaurants/screens/Restuarants";


export default function Page() {

  return (
    <>
    <Restuarants/>
      <ExpoStatusBar style="auto" />
     
    </>
  );
}

