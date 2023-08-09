import { View, Text, TouchableOpacity, Image  } from 'react-native'
import { checkImageURL  } from '../../../../utils'
import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress } : { item : [], selectedJob : string, handleCardPress : Function }) => {
  return (
      <TouchableOpacity
        //@ts-ignore: true
        style={styles.container(selectedJob, item)}
        onPress={() => handleCardPress(item)}
      >

        {/* @ts-ignore: true */}
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{
              // @ts-ignore: true
              uri: checkImageURL(item?.employer_logo)
                // @ts-ignore: true
                ? item.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode='contain'

            // @ts-ignore: true
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>

            {/* @ts-ignore: true */}
          {item.employer_name}
        </Text>

        <View style={styles.infoContainer}>

          {/* @ts-ignore: true */}
          <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {/* @ts-ignore: true */}
            {item.job_title}
          </Text>
          <View style={styles.infoWrapper}>

          {/* @ts-ignore: true */}
            <Text style={styles.publisher(selectedJob, item)}>

              {/* @ts-ignore: true */}
              {item?.job_publisher} -
            </Text>

            {/* @ts-ignore: true */}
            <Text style={styles.location}> {item.job_country}</Text>
          </View>
        </View>
      </TouchableOpacity>
  )
}

export default PopularJobCard