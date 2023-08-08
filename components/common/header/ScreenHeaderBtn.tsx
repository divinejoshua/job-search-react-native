import React from 'react'
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'


import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress } : { iconUrl : ImageSourcePropType, dimension : string, handlePress :Function}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={()=>handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        //@ts-ignore: true
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn