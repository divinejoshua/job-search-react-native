import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";


const Company = ({ companyLogo, jobTitle, companyName, location } : { companyLogo : string, jobTitle : string, companyName : string, location : string}) => {
  return (
      <View style={styles.container}>

        {/* Company image  */}
        <View style={styles.logoBox}>
          <Image
            source={{
              uri: checkImageURL(companyLogo)
                ? companyLogo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            style={styles.logoImage}
          />
        </View>

        {/* Job title  */}
        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>

        {/* Company info  */}
        <View style={styles.companyInfoBox}>

          {/* Company name  */}
          <Text style={styles.companyName}>{companyName} / </Text>
          <View style={styles.locationBox}>

            {/* Location icon  */}
            <Image
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />

            {/* Company location  */}
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>
      </View>

  )
}

export default Company