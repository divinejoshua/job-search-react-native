import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function three() {
  return (<>
    <Stack.Screen options={{ title: 'Oops!', presentation: 'modal'  }} />
    <View style={styles.container}>
    <Text style={styles.title}>Tab Three</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <EditScreenInfo path="app/(tabs)/three.tsx" />

    <Link href="/info">
          <Text style={styles.linkText}>Go to info page</Text>
    </Link>
  </View>
  </>
  
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    linkText: {
      fontSize: 16,
      color: '#2e78b7',
    },
  });
  