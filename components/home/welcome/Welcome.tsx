import React from 'react'
import { View, Text } from 'react-native'

import styles from './welcome.style'

const Welcome = ({searchTerm, setSearchTerm, handleClick} : {searchTerm : string, setSearchTerm : Function, handleClick: Function}) => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome