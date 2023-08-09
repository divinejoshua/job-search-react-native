import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";



// Tab button component 
function TabButton({ name, activeTab, onHandleSearchType } : { name : string, activeTab : string, onHandleSearchType : Function})  {
  return (
    <TouchableOpacity
    // @ts-ignore: true
      style={styles.btn(name, activeTab)}
      onPress={()=>onHandleSearchType}
    >
      {/* @ts-ignore: true */}
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}


const Tabs = ({ tabs, activeTab, setActiveTab } : { tabs : string[], activeTab : string, setActiveTab : Function}) => {
  return (
      <View style={styles.container}>

        {/* Flat list to loop through tabs */}
        <FlatList
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
              // TabButton component 
            <TabButton
              name={item}
              activeTab={activeTab}
              onHandleSearchType={() => setActiveTab("item")}
            />
          )}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
          keyExtractor={(item) => item}
        />
      </View>
  )
}

export default Tabs