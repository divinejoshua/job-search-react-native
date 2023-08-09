import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";


const Tabs = ({ name, activeTab, onHandleSearchType } : { name : string, activeTab : string, onHandleSearchType : Function}) => {
  return (
    <View>
      <Text>Tabs </Text>
    </View>
  )
}

export default Tabs