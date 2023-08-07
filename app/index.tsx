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
  // Data 
  const [searchTerm, setSearchTerm] = useState("");


  return (
   <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.lightWhite }}>

    {/* Stack screen options  */}
      <Stack.Screen options={{
        headerStyle:{
          backgroundColor: COLORS.lightWhite,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
        ),
        headerTitle: "",
      }}/>


      {/* Main scroll view  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >

          {/* Welcome Component  */}
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          {/* Popular job component  */}
          <Popularjobs />

          {/* Nearby jobs component  */}
          <Nearbyjobs />
          
        </View>
      </ScrollView>

   </SafeAreaView>
  )
}