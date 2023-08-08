import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = ({searchTerm, setSearchTerm, handleClick} : {searchTerm : string, setSearchTerm : Function, handleClick: Function}) => {
  return (
    <View>
      {/* Header text  */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Alex</Text>
        <Text style={styles.welcomeMessage}>Find the right Job</Text>
      </View>

      {/* Search input  */}

      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              placeholder='What are you looking for?'
            />
          </View>

          {/* Search button  */}
          <TouchableOpacity style={styles.searchBtn} onPress={()=>handleClick}>
            <Image
              source={icons.search}
              resizeMode='contain'
              //@ts-ignore: true
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
      </View>




    </View>
  )
}

export default Welcome