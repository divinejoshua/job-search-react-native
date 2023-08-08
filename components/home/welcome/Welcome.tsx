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

// Job types constants 
const jobTypes = ["Full-time", "Part-time", "Contractor"];


export default function Welcome({searchTerm, setSearchTerm, handleClick} : {searchTerm : string, setSearchTerm : Function, handleClick: Function}) {


  const router = useRouter();


  // Data 
  const [activeJobType, setActiveJobType] = useState("Full-time");


  return (
    <View>
      {/* Header text  */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Bella</Text>
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
      

    {/* Display the job types */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
            //@ts-ignore: true
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              {/* @ts-ignore : true  */}
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>


    </View>
  )
}