import { View, Text } from '../components/Themed'
import { useState } from "react";
import { SafeAreaView, ScrollView, useColorScheme } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";



export default function home() {

  const router = useRouter()

  // Get theme 
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "light" ?  COLORS.lightWhite : COLORS.backgroundDarkMode
  const textColor = currentTheme === "light" ? COLORS.backgroundDarkMode :COLORS.lightWhite
  // const borderColor = currentTheme === "light" ? Colors.light.borderColor :Colors.dark.borderColor

  // Data 
  const [searchTerm, setSearchTerm] = useState("");


  return (
   <SafeAreaView style={{ flex: 1, backgroundColor:backgroundColor }}>
      <Stack.Screen options={{
        headerStyle:{
          backgroundColor: backgroundColor,
        },
        headerShadowVisible: false,
      }}/>

   </SafeAreaView>
  )
}