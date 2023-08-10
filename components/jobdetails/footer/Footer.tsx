import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking, Platform, } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import styles from './footer.style'
import { icons } from "../../../constants";
import { ExternalLink } from '@/components/ExternalLink';
import * as WebBrowser from 'expo-web-browser';


const Footer = ({ url } : {url : string}) => {

  // Open external Link 
  const openExternalLink = (url: string, e:any) =>{
    if (Platform.OS !== 'web') {
      // Prevent the default behavior of linking to the default browser on native.
      e.preventDefault();
      // Open the link in an in-app browser.
      WebBrowser.openBrowserAsync(url);
    }
    <>
   {/* Status bar  */}
   <StatusBar style="auto"/>
  </>
  }
  return (
    <View style={styles.container}>

      {/* Like Button  */}
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      {/* Apply button  */}
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={(e) => openExternalLink(url, e)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer