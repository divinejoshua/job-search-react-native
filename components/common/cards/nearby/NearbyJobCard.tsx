import { View, Text, TouchableOpacity, Image  } from 'react-native'
import { checkImageURL } from "../../../../utils";
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }: { job : object, handleNavigate : Function}) => {
  return (
      <TouchableOpacity style={styles.container} onPress={()=>handleNavigate}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              //@ts-ignore:true
              uri: checkImageURL(job.employer_logo)
                //@ts-ignore:true
                ? job.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode='contain'
            style={styles.logImage}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {/* @ts-ignore:true */}
            {job?.job_title}
          </Text>

          {/* @ts-ignore:true */}
          <Text style={styles.jobType}>{job?.job_employment_type}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default NearbyJobCard