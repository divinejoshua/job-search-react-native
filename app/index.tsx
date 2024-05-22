import { useState } from "react";
import { SafeAreaView, ScrollView, useColorScheme, View, Text, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { GestureHandlerRootView, RefreshControl } from "react-native-gesture-handler";



export default function home() {

  const router = useRouter()

  // Get theme 
  // Data 
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setisRefreshing] = useState(false) 


  // Loading functionality 
  const LoadData = () => {
    // Set loading to true 
    setisRefreshing(true)

    // Set Loading back to false after a few seconds 
    setTimeout(() => {
      setisRefreshing(false);
    }, 2000);
  }



  return (
   <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.lightWhite }}>

    {/* Stack screen options  */}
      <Stack.Screen options={{
        headerStyle:{
          backgroundColor: COLORS.lightWhite,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' handlePress={()=> null} />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' handlePress={()=> null} />
        ),
        headerTitle: "",
      }}/>

      {/* StatusBar  */}
      <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>


      {/* Main scroll view  */}
      <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RefreshControl
                refreshing={isRefreshing}
                // tintColor={"transparent"}
                onRefresh={LoadData}
              />
            </GestureHandlerRootView>
          }
      >
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