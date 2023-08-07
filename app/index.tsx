import { View, Text } from '../components/Themed'
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
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

  // Data 
  const [searchTerm, setSearchTerm] = useState("");


  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

   </SafeAreaView>
  )
}