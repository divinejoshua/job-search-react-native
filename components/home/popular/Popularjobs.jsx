import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
// import useFetch from "../../../hook/useFetch";

isLoading = false;
error = false;

const Popularjobs = () => {
  return (
    <View style={styles.container}>

      {/* Poular jobs header  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* Results display  */}
      <View style={styles.cardsContainer}>

        {/* If results are still loading  */}
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) 
        // If there is an error 
        : error ? (
          <Text>Something went wrong</Text>
        ) 
        
        //Display the results in a flat list of cards
        : (
          <FlatList
            data={[1,2,3,4,5,6,7,8,9,10,11]}
            renderItem={({ item }) => (
              <PopularJobCard
                // item={item}
                // selectedJob={selectedJob}
                // handleCardPress={handleCardPress}
              />
            )}
            // keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>


    </View>
  )
}

export default Popularjobs