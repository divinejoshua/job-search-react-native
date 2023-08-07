import React from 'react'
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'


import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension} : { iconUrl : ImageSourcePropType, dimension : string}) => {
  return (
    <TouchableOpacity>
      <Image
        source={iconUrl}
        resizeMode='cover'
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn